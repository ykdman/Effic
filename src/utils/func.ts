type getCurrentDateArg = {
  locale: Intl.LocalesArgument;
};

export const getCurrentDate = () => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  // toLocaleString을 사용하여 부분적으로 형식화된 날짜를 얻습니다.
  const formattedDate = date.toLocaleDateString("ko-KR", options);

  // '2024. 07. 03.' 형식의 날짜 문자열을 '2024-07-03' 형식으로 변환합니다.
  const [year, month, day] = formattedDate
    .split(". ")
    .map((part) => part.padStart(2, "0"))
    .slice(0, 3);
  const today = `${year}-${month}-${day}`;
  return today;
};
