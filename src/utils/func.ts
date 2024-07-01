type getCurrentDateArg = {
  locale: Intl.LocalesArgument;
};

export function getCurrentDate({ locale = "ko" }: getCurrentDateArg) {
  const today = new Date().toLocaleDateString(locale);
  return today;
}
