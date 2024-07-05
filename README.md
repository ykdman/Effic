# Efficieneer Project

Hope to provide you with efficiency.

## Project Description

- 효율적인 일정 관리, 및 하루 기록을 위한 서비스
- Note : 하루 기록 및, 메모 기능을 이용한 텍스트 기록 서비스
- ToDo : 할 일 목록 작성 서비스
- Calender : ToDo와 연결 되어, 일정별 할 일 확인 서비스

## 🛠️Project Skills

### Basic

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://ko.vitejs.dev/guide/)
- [React-Router](https://reactrouter.com/en/main)
- [vanilla-extract](https://vanilla-extract.style/)

### State Management

- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

## Project Architecture

```
Efficieneer
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ components
│  ├─ features
│  │  ├─ Calander
│  │  │  └─ components
│  │  ├─ Notes
│  │  │  └─ components
│  │  └─ ToDos
│  │     └─ components
│  ├─ global.css
│  ├─ main.tsx
│  ├─ pages
│  ├─ store
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

```
Effic
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 66bcadf216c6b5f538c80a3f2d9f0f4c658c8e
│  │  │  └─ a16440a969cd66d1bc65282fb18ceec5eb59cc
│  │  ├─ 02
│  │  │  ├─ 34d8337e75eb953a866adb6834453273eefbcb
│  │  │  └─ d6c1b742d141280988d981fd82ba34162e91c0
│  │  ├─ 07
│  │  │  └─ 9bf6ef1de9ac63706b809207b31755e7154c4a
│  │  ├─ 08
│  │  │  ├─ 5750911eced04f7b4e6c74393c0438b6520f28
│  │  │  ├─ b2270403bf4848cff7927d2920011d80396f18
│  │  │  ├─ c3070a608bd1916e45e4f42571112fe52c3565
│  │  │  ├─ cef55f7dbbf2f8c7e2365648b0cdc4a6949901
│  │  │  └─ f028cad2a1affb5d927585b1c8fc88b5d51b18
│  │  ├─ 0a
│  │  │  └─ 4b31f8ade1b85dbc92edd8c4b528c10720962d
│  │  ├─ 0c
│  │  │  └─ bf446ef70c15785863f9dc9110c73faaaf85f8
│  │  ├─ 0d
│  │  │  ├─ 51e82ee1a5857ae4e95b0b7921be708431d319
│  │  │  └─ dd8d35111d9a7bedadb531771ab3a6d94f3cd0
│  │  ├─ 0e
│  │  │  ├─ 026ae3af86dda59691a4c48018f4e88387ec21
│  │  │  ├─ 2d83ea12a0908348cc24e02515f8681ce80605
│  │  │  └─ 86dd36506f9b5caff35b8b12131fb497a0615a
│  │  ├─ 10
│  │  │  └─ f23780adb8c2c32a6ca1c123a5943fd6c21d8b
│  │  ├─ 11
│  │  │  ├─ 27365c6c41e123a0e9029024462b893a21bd48
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 12
│  │  │  ├─ 55e6cb6b1ceb1731782f1ae2bcccedf2f93d2f
│  │  │  ├─ c155e2aca7d28b86f485fb37e3628186bbc275
│  │  │  └─ ff93afaed8218af2f1bbcd7baf895f0f985c79
│  │  ├─ 13
│  │  │  └─ 7da3af5b35017851014e7817a07a47918af20d
│  │  ├─ 15
│  │  │  ├─ 8a5c6d058927ab989ff37a6263f68e5640a846
│  │  │  └─ c00ee93efbb7ab0d3c464ae360d3226ff0266b
│  │  ├─ 16
│  │  │  └─ f3cbe804fef54887bdcdda648c05357cb7ef3a
│  │  ├─ 17
│  │  │  ├─ de2e04c0ae98b04ed54aa959e21c4214a80672
│  │  │  └─ e2f43b46840db4ed03aa12bccc2273a5bb04c9
│  │  ├─ 18
│  │  │  └─ c69b5bcfc83752cabd16fe7b3feff1c2531d8c
│  │  ├─ 19
│  │  │  └─ 539bde00d3db52ca0d3e018be4736e80f0ab42
│  │  ├─ 1a
│  │  │  ├─ 487a064e4bd6f28541aa2d495ab5e925f8f31d
│  │  │  └─ 90fb7b0a2d07a90339201b08173faad79119bb
│  │  ├─ 1b
│  │  │  └─ 61e7d5ad28eeec7e05268e8cb13333b3970b3e
│  │  ├─ 1c
│  │  │  ├─ b928da92271797540beec2078d76cef4e6a1d7
│  │  │  └─ d36dbefc68a792aeeb261d01705b094ce149cc
│  │  ├─ 1d
│  │  │  └─ 09d3dd36faaba6e317ba0e519a53add8c6a7b2
│  │  ├─ 1f
│  │  │  ├─ 2e888346655d5cd426aaffd9ed2cb3e6672325
│  │  │  └─ 4699143a45225e1cae2cf4832695d2f36acd72
│  │  ├─ 21
│  │  │  ├─ 77a00d7c790b5c9609172fde32b4403e3d2d46
│  │  │  ├─ 7bdee8674f0e59ad5d165e7116c57139a6ab61
│  │  │  └─ f029caac39436077a2dc86c8f2f84a4ddf2f9d
│  │  ├─ 22
│  │  │  └─ 547989273f0b64d03ef0c7b2ab98dc5d11a117
│  │  ├─ 23
│  │  │  └─ e89508c45abe653c79333b50b7d1ae19704868
│  │  ├─ 24
│  │  │  └─ 7f405901c774d08fe613be4a5cbc8c3d90d498
│  │  ├─ 26
│  │  │  └─ d1e0469ade71bc3015a858edf95146fcbd9220
│  │  ├─ 29
│  │  │  ├─ da6de2125fb4bca16cd3705150d90cf20011b3
│  │  │  └─ edafb7d90c4da58250d2d94ba46ae01084cdee
│  │  ├─ 2a
│  │  │  └─ 939db790222cddd5d9bc3f9cd9ba471749a151
│  │  ├─ 2c
│  │  │  ├─ 16922c744b615dd56f0aee9ac218e55679cd2f
│  │  │  ├─ 9e272977eec41b3b685da583ebf2b647423d58
│  │  │  └─ eeb6ce8697156a37b45099a509030f654dc347
│  │  ├─ 2f
│  │  │  └─ 3fd92829e68f2cb7b70f148a312e262324aa91
│  │  ├─ 31
│  │  │  └─ 8e53c1d2dedb2e1b40e29538aed2a72a61f7b0
│  │  ├─ 32
│  │  │  ├─ 1fe474c01bbd7dd4872e6f894adcf41c9b4a84
│  │  │  └─ ae219a0d69c3b606de31e11f30b8501193c779
│  │  ├─ 33
│  │  │  └─ fdfa183c9f7e9aca2bb009251683aaf21e69fd
│  │  ├─ 36
│  │  │  └─ eeccea4ca1347b886db44b8fb1a5af7f24900a
│  │  ├─ 37
│  │  │  ├─ 66c2a1668ee325c37cecb71e92b750c87d38ad
│  │  │  └─ 969ac503a1293ad2d57747d388e61efb96f8a4
│  │  ├─ 38
│  │  │  ├─ 30c5f02bb2079fc5f9cf1311fa61f56892b2f6
│  │  │  └─ a2d3fe8c63a75be8ac51b2e855d5a5ccb6b13c
│  │  ├─ 39
│  │  │  └─ 87755899b20cdd6219cea5aa630965aa4be0d7
│  │  ├─ 3a
│  │  │  └─ 66d4b49a8a6aaaf950e622654a1abb1969eb28
│  │  ├─ 3b
│  │  │  └─ fefd74ab85df93edd88869db5ee13d015b2860
│  │  ├─ 3c
│  │  │  ├─ 659ad4cc3cd7459ffc289256c8e6c6de2a1103
│  │  │  └─ 868be2cb22704a4ba85ff21a8a0ddf78657a38
│  │  ├─ 3d
│  │  │  └─ 7150da80e43e3650342aa4758fa8b74e95d6d6
│  │  ├─ 3e
│  │  │  └─ 546d0d1ae1dd6a172ec7a0064a2320037eddc3
│  │  ├─ 41
│  │  │  ├─ 7b29ec28d1dbc3a76cc2c8fddf1c4ca23206fa
│  │  │  └─ a863929fc8b9053908db0489b4a48f18c8c8f9
│  │  ├─ 42
│  │  │  └─ 268768b1794b07085974e1cbf7dc69486f9a34
│  │  ├─ 44
│  │  │  └─ e7d1363b9633a428ecab36620fe344f1f2fd25
│  │  ├─ 46
│  │  │  ├─ be8581c22c33c5284161ec92423c128a5ce59d
│  │  │  └─ e688725d6917b1777b9199bab79079b5c2d49c
│  │  ├─ 4c
│  │  │  ├─ 9d8b82bc18768bb924868bdd194eb8055daee9
│  │  │  └─ f28979aa1945bb426fb765970b80106d6609ec
│  │  ├─ 4d
│  │  │  └─ 7dba158457b36bc719e9a0b47c720b92c6ec28
│  │  ├─ 4e
│  │  │  ├─ 8856064ad0b7413eeb503d7ff8df33eef7b609
│  │  │  ├─ cf831ebd953bd7b77692c895a8e54bd485afdd
│  │  │  └─ e9be347ee6b5f9a57fd27efe9b3cb7ceefc7a7
│  │  ├─ 4f
│  │  │  ├─ 031f45fefc7f7a9f58c6ba54b65a5329d39ca2
│  │  │  └─ 8e5d8080d0dcfb6e394060cf80397d82610c9b
│  │  ├─ 51
│  │  │  └─ 07ee7fa1dee223fdb011ed4bf0797e70ce00d9
│  │  ├─ 52
│  │  │  ├─ 2370d9f5b70f126c93652d82584557d1aa7e69
│  │  │  └─ 4f5eadc0acacd71682f58e4ffccb259a135938
│  │  ├─ 53
│  │  │  ├─ 6722cc8f3520cd23f28cd901730b80784312e8
│  │  │  ├─ e4d2d930b5ed1b536c9ef9942429faf1d02f6d
│  │  │  └─ e76aa093ab5b29629e66b656bd25c7a5563690
│  │  ├─ 54
│  │  │  ├─ b9868a08e563d53f80791ee134ce98253872e1
│  │  │  ├─ de2a09addaea649ec717d3328d2e49e383dfe2
│  │  │  └─ f6870900dd8d484ae0abd594fb3a27a3de64a8
│  │  ├─ 55
│  │  │  ├─ 0ce69adeff31e144ca49b70a7564c1bbf942a2
│  │  │  ├─ 123647f3624f85e1f5779c8860c5c925d04eb2
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 56
│  │  │  ├─ 216a3fe264f97f979494b503b0260f57e3c7dc
│  │  │  └─ c72f8301a4ddaecd1ca66d099eaf39fb6a83f9
│  │  ├─ 57
│  │  │  └─ dc3a6c736a68456c9bc88dedbf85d84a67bf0a
│  │  ├─ 58
│  │  │  ├─ 11e8d766f17795861f924e98d7f34a27822a1f
│  │  │  └─ ea084b7d785d84098b4d4fa84f0539235ace8b
│  │  ├─ 59
│  │  │  ├─ 41dd134a642c6853a8b6fe5b5d799cfb4b9c8c
│  │  │  └─ 608ca7fc1fdc75a778a0e4270fd5b5d33e6a14
│  │  ├─ 5a
│  │  │  └─ a94376dffbf8fb1d70cec1b647a631379bb674
│  │  ├─ 5b
│  │  │  └─ c7917175eb4ac8adc8b99bf7124208878249d9
│  │  ├─ 5c
│  │  │  ├─ 4bbce827b8fd6a948cab66f34f640cc7ad345d
│  │  │  └─ 83262d6ca5ad31b2f1d3964496090ce6a1371e
│  │  ├─ 5d
│  │  │  └─ 4b3ea8c185354bd389f6390399b197f5ae7a4b
│  │  ├─ 5e
│  │  │  ├─ aaca4d6dea6df8667b86f4e06f9c838eda7d7a
│  │  │  ├─ ae92b9150e5e6d2b3ed15b897c192a8e065e0e
│  │  │  └─ bf7969c711a9affa36c91614d43ff0eac385b6
│  │  ├─ 5f
│  │  │  ├─ 3b7fa4670446641ece77af15dedfe70a14b15f
│  │  │  ├─ 3c679d71f4e744cc0f5bb80d3db609ed99e4e1
│  │  │  └─ bf3798707e61de66079ecee590a3e7a3bec8d8
│  │  ├─ 60
│  │  │  ├─ 63c08264db2a91027c31367bb0672af204c443
│  │  │  └─ aaa8a1d941f728815b8df383665b5c726a84bd
│  │  ├─ 61
│  │  │  ├─ 080e29a10312fecaa9203bbeb4d76b605ceafb
│  │  │  ├─ 19ad9a8faaa5073a454f67b50fb98a25972fd2
│  │  │  └─ c39340a9877f79a22ea918be6acaed5f7c9f6e
│  │  ├─ 62
│  │  │  └─ 60ad3857bbe43877048b68c87968dfb2f9fe30
│  │  ├─ 63
│  │  │  └─ 92fc0e7357a353d3feb03aa212c93d8d51fb73
│  │  ├─ 65
│  │  │  ├─ 1a2bc24587f35e827feb55879d8676a5eb79e4
│  │  │  └─ 3cec1848aed4e91a7f60fa815831cdb9cf3fa0
│  │  ├─ 66
│  │  │  ├─ 062c44882f0f8de4ad297d5239b0fa19002ae1
│  │  │  └─ defeeccf255a705a4ab545ea3cc250d4e87ea6
│  │  ├─ 67
│  │  │  ├─ 69952ab735b102079102463c66beac63d0938b
│  │  │  ├─ 79f6f3322559b09c817bde753916961d7b9619
│  │  │  └─ 922d0640a839cd5070b74c3657470a190965aa
│  │  ├─ 68
│  │  │  ├─ af028fab72fb913d32d4b7fb31b8a7098c617f
│  │  │  └─ d1c0428960b47d9204cec6a9afa3940b3e2179
│  │  ├─ 69
│  │  │  └─ 0c62da5462bd32e569c784dc3a174385f52488
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 6d
│  │  │  ├─ afd23976a4a19a7b22af3dbcf23ed513a88fe3
│  │  │  └─ f2b8e94a30f12927fb5ba6ac1c3209551b8f33
│  │  ├─ 6f
│  │  │  └─ 809a7aee711b82b2ce44c12e6eb5ef63237546
│  │  ├─ 71
│  │  │  ├─ 144e6d663d736368ef62d8ba3a8aac25efe395
│  │  │  └─ 8e414ca0fd2277250bc6df783311a3d3ceede8
│  │  ├─ 72
│  │  │  ├─ 84243cf4032f29aee71713248e14e38b202926
│  │  │  └─ be649c1d8890a99a03dd9deefd4a1fc6d9de11
│  │  ├─ 75
│  │  │  └─ ae4c6cbbf94718a10f461f01182ab6765f6797
│  │  ├─ 76
│  │  │  └─ f4053131f50b8659d6affeb4aad7f331dd2e05
│  │  ├─ 77
│  │  │  └─ 7e6ecd3431407a24aa98abd3de27e92e78b9ba
│  │  ├─ 79
│  │  │  ├─ 65db91d9a77802a7a009ff7e9663a4d533dc08
│  │  │  └─ ed997d28d144001f58011b8603d1c48781d0b4
│  │  ├─ 7a
│  │  │  └─ 6b3f502192c747dc958043f45d0633154920da
│  │  ├─ 7f
│  │  │  └─ 97841de8278da0cab4fee0651246a7ce363cd5
│  │  ├─ 80
│  │  │  └─ 54d3ef8965d2c9170c961ee7f196b4b0d1a1e8
│  │  ├─ 81
│  │  │  ├─ 0dfe4a3c699c0dd10f9b9b6029c1d6740e40ba
│  │  │  └─ c309843bbcab6ebbe2421e040374cade9cd7af
│  │  ├─ 82
│  │  │  ├─ 52dc5814540e380ab2e167555322dc023c28b0
│  │  │  └─ 959d62b30a134b09e90fef223ead520317f232
│  │  ├─ 83
│  │  │  └─ e2f318f0a919fc043bc81f95402b169a507c87
│  │  ├─ 84
│  │  │  └─ 2ac6fe310183043e2441a687a12d22d880b259
│  │  ├─ 86
│  │  │  └─ 1b04b35601de92787a1a0db6c9fa190975d220
│  │  ├─ 87
│  │  │  ├─ 10600dd5c2dfe269bcaa3970f3ad6529acc71a
│  │  │  └─ fe6005bf3c7b3468bc2215d004da72b5c8e07d
│  │  ├─ 88
│  │  │  ├─ 82a7d8b8ec98ed170127211b30fb0465750cb9
│  │  │  └─ cd815e7f59e2edfc6a3b03ffb2e9b2891b3911
│  │  ├─ 89
│  │  │  ├─ 35a3e155d5cd56544ff554c01bf0544b7d6d27
│  │  │  └─ 7de59c81d7744e9caa47040b07a766090b2838
│  │  ├─ 8a
│  │  │  └─ aba38e48bab39fbafef14fd95e841920bfa19f
│  │  ├─ 8c
│  │  │  └─ a06e8fdf85e856caf72ac95a6090bd6cc956df
│  │  ├─ 8d
│  │  │  ├─ 91dede1fb379b1789005a94b49ff0d8372a38d
│  │  │  ├─ 94f511c9772606d2b916ad8b49834de7455c37
│  │  │  └─ ff1ef87cc31719ddbeac26ac60f5276c24f517
│  │  ├─ 8e
│  │  │  ├─ 0362b62f1e5075a892e0dde455b5af3fcfcaca
│  │  │  └─ 6cbb1653bec44b6314b7c8d4484d6b1ed5d5ce
│  │  ├─ 91
│  │  │  ├─ 27336e2e6501e441f2f946ba2f8496c2448662
│  │  │  └─ cc55cd7b787ab5aacd0cefb1d5525f244db178
│  │  ├─ 92
│  │  │  └─ 537bdd3302922000ca08a76ee38e48e485df4d
│  │  ├─ 94
│  │  │  ├─ 5b6c2cfc720e246eeb11a63d51ea96042520e8
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 95
│  │  │  └─ cbdceaec8da1ee04b8144f265a1516002d2d70
│  │  ├─ 96
│  │  │  └─ 91191e8aeedefab0a20337b1fb4bcf76a9226b
│  │  ├─ 97
│  │  │  ├─ 8e115dd2d04418bb53ba38f0e7b3966da4efee
│  │  │  └─ ede7ee6f2d37bd2d76e60c0b6a447bee718b05
│  │  ├─ 98
│  │  │  └─ 7828d2dd21c28f7c91c923804ed09f3a721a6e
│  │  ├─ 99
│  │  │  ├─ 2fd213a668cc890ef9daed58e1dae8be362698
│  │  │  ├─ 91da70665a229614fa8503f59731da746eec7c
│  │  │  └─ f3bd9ad37f231d7ebe059e89f1c221d954245d
│  │  ├─ 9a
│  │  │  ├─ b5896bbe817def46e7648cf91d2c4ed5f5e6f6
│  │  │  ├─ c18ce9eb33ae672193dd4f865cf3b82c78af14
│  │  │  └─ d3b9dc242bd395fb1105c9933cb1b101b0b638
│  │  ├─ 9b
│  │  │  └─ 5b62fbab5ba0d95991ec58cf38be0a0f584cd5
│  │  ├─ 9d
│  │  │  └─ 1aaf6985210ace6c47a9fbcbc8e11ac5f530bc
│  │  ├─ 9e
│  │  │  ├─ 131b13afe3acbd027a6ca9e227930c55c7a67b
│  │  │  ├─ 6f0f10a9a9ec223e1192113684f7a5a41f954c
│  │  │  └─ afa006f650d83242ef550277a0f7e083e39539
│  │  ├─ a0
│  │  │  └─ e8dff7747821c826dd08dbb926214180dac7fd
│  │  ├─ a1
│  │  │  └─ 742a44508b9fca61660421f41727b8d29b1cd5
│  │  ├─ a3
│  │  │  └─ 1abb2b1b860fc1e974c1b0570d22f161d5d571
│  │  ├─ a4
│  │  │  ├─ 570268668a93cd4a54dd67e56cdfca6745e60e
│  │  │  └─ 5944ebcb8a9a84b3aaf322a06a1bf3d2c92630
│  │  ├─ a5
│  │  │  ├─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  │  └─ e886f9dfce79853692fd8267e7ef5358a4ec8f
│  │  ├─ a7
│  │  │  ├─ 25ed0c46d440b40d3842ec62497c9de74a8e51
│  │  │  ├─ 911731cc46f05cb3a19a586a4b63e40c8ec703
│  │  │  └─ fc6fbf23de2a53e36754bc4a2c306d0291d7b2
│  │  ├─ a8
│  │  │  ├─ 49c22a49830057686fa630ee154ef8cd8367cc
│  │  │  └─ bddff2f2137e2633f5cf76f1fc8903f734794c
│  │  ├─ a9
│  │  │  └─ ca12a66c9aff366c238faf37b6adfec8b26b8c
│  │  ├─ aa
│  │  │  └─ 770c996cc1acf5a3d04f274200a252a3674b34
│  │  ├─ ab
│  │  │  └─ e974a30a55be802256af64c5fb82044fc33db3
│  │  ├─ ac
│  │  │  └─ da389142afc5d5f3dfb91e5d019a6772302bd9
│  │  ├─ ad
│  │  │  ├─ 1cf763c3436736976662189d6e8c45688ba3bc
│  │  │  └─ c656f75010a4512b1b3e0804e6c242c33c374f
│  │  ├─ ae
│  │  │  ├─ 40d807b8ba9499de02d11cf019ba09f160b0aa
│  │  │  ├─ c7816151bf2039e4319116f2fbaaab44dd85d2
│  │  │  └─ cc95c9e521ed652e3c501bd1233215a5342873
│  │  ├─ b0
│  │  │  └─ 515623dc9dc05450bbd731992af5ab4815b7de
│  │  ├─ b3
│  │  │  ├─ 60005d67ef242a1ebd4c109f99f5b61aadb635
│  │  │  └─ 658d94b704b05cf65f3e8cca6a75502e839a9d
│  │  ├─ b4
│  │  │  └─ f6543fe270ddf4be84df1f12b094b253b2c88e
│  │  ├─ b5
│  │  │  └─ fcd251aba1deef73ff2b9d7e4c907bab128dc7
│  │  ├─ b6
│  │  │  ├─ bb248c15cc9d3c06753dcf7639579a37552235
│  │  │  └─ d3ff8fd3cf93b0a2b3fb13e16f3bec2e96b085
│  │  ├─ b7
│  │  │  └─ 6d8d645bef0ea1b4e329d7f1a33d6f0e76b6c1
│  │  ├─ b9
│  │  │  ├─ a7d6f4494f474b2101c1d3ca708db86b39ad68
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ bb
│  │  │  └─ 6223666d54e21f8396e9b10b3bacd4d09792e0
│  │  ├─ bc
│  │  │  ├─ 572cbe38ff56fc7b4c5df3af07738ea5329f9a
│  │  │  ├─ a8bf8365e8990c1841d2ea9cd822dccb598bd4
│  │  │  └─ f7e6079279ecb082fd5e8b8e86f0d067f3f3bf
│  │  ├─ bd
│  │  │  └─ 8ce3b81b95691f6e0ced2e228caa09c626d11f
│  │  ├─ be
│  │  │  └─ a9fd633230d2a5a6987ee511b40a1f51913fd4
│  │  ├─ bf
│  │  │  └─ 8fdfa0dcca07fee193a319bcef81ccba29acf6
│  │  ├─ c1
│  │  │  └─ 0d156e593c9d591afda409850f2d3224642464
│  │  ├─ c2
│  │  │  └─ 9eab9bb6322a8d199e3faed4d916c734e0431f
│  │  ├─ c3
│  │  │  ├─ 0f83740094b999e70d76b993f91a398154e04f
│  │  │  └─ db31fa1bab03696013fbf2efd8d07d27c2da00
│  │  ├─ c5
│  │  │  └─ 95f67f548c097b5d1c393a17bc753078f1d269
│  │  ├─ c6
│  │  │  ├─ 0868d2021a99d6ef0540c62e08cb3ea4b1cf7d
│  │  │  ├─ 96cfc9b37659a51cb29633aa4fda1948a420b3
│  │  │  └─ a45ccbf5f5686d4eb1069ed76148f6c6b2663d
│  │  ├─ c8
│  │  │  └─ 64d09d56b2c54814c256e168c82289607f35c5
│  │  ├─ c9
│  │  │  ├─ 73a6605400a4fdadf1ac8a66216517fca5da67
│  │  │  ├─ ae3345aaa046d6fa694f257844a7a55b33471a
│  │  │  └─ ca41077d1a49fc5267a801cbc611efd8039a36
│  │  ├─ ca
│  │  │  └─ 29c2e93d1f5ff40b43b5e50e41fe3b632662d1
│  │  ├─ cb
│  │  │  └─ 2019cc4be6d43a98c22d5568e179b24a4738f2
│  │  ├─ cc
│  │  │  ├─ a57b36a8a657300997050dae1d747750b52912
│  │  │  └─ ace5c99dda2b857e9f54ad67e93e3dfa393bd8
│  │  ├─ cd
│  │  │  └─ 07502451e32e7f699ee36255492948904bffa7
│  │  ├─ d0
│  │  │  └─ 8e912d6f47469c32e65d258cc77b613e090613
│  │  ├─ d1
│  │  │  ├─ 62a2d9b7991616a35d0c51d293b4d2a91a0808
│  │  │  └─ dc59ef2f34e63e0bfc70cefccec13e18b99001
│  │  ├─ d3
│  │  │  └─ ee8cbac9fe614a242f1d7ab6ff2efcf73b3f68
│  │  ├─ d4
│  │  │  ├─ 1e9e31a22df20100834da0c448729e5b13ad76
│  │  │  ├─ 220b395be6f72563ad27ccb034d93d329a022c
│  │  │  └─ 50fa87c7f86da15c28c46a1ef8f78518903909
│  │  ├─ d5
│  │  │  └─ 5e47bb4da9ff738dbbdacbcce82bfb33cab52c
│  │  ├─ d6
│  │  │  ├─ baf3bccf2331cccc1cf99e7f092101b076946f
│  │  │  ├─ c953795300e4256c76542d6bb0fe06f08b5ad6
│  │  │  └─ e0149998f182fbda767772ef70c38245dc7c47
│  │  ├─ d8
│  │  │  └─ a75522258562a3ad982f7c348d1b81e704a78c
│  │  ├─ d9
│  │  │  └─ f1e36e9c18db52045957bec38baeb83fec6c93
│  │  ├─ da
│  │  │  ├─ 04fb3d62d514331acf4f446dc9ae11419bf202
│  │  │  ├─ 0c87e3ed8e3ededfe75b5e5e569a6973d60d2a
│  │  │  └─ 2c77fd650f70e1ea27aac7e7eac4c6e71feef2
│  │  ├─ db
│  │  │  └─ e20ecec4bac6035b0a955edea5ed71dad25324
│  │  ├─ df
│  │  │  └─ ae5ef634d26bc1ed44750fea2f44431a1b5d95
│  │  ├─ e0
│  │  │  ├─ 12ea279e64abb3174c32ebe913cf3af270279c
│  │  │  ├─ 5666ae0e6b3bd17594a8cc6826258c9e5c379c
│  │  │  ├─ 8233a3d12f6f5549e2971a4ec0a460f2e40a62
│  │  │  └─ 95734c59f7a88504d0f7f5636a99a024a5a4b6
│  │  ├─ e3
│  │  │  └─ 0ff73c9ed3ceb179a6643a59812a483dfa53fe
│  │  ├─ e4
│  │  │  ├─ 25a743bcf510007577a3336c1d043e0b4fe059
│  │  │  ├─ b3bed6472219dd5a57e2e76d729ed87a28ab60
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e5
│  │  │  ├─ efd16485dc15333478c241e2c98528bbcacad0
│  │  │  └─ f31b13e0fb9a6cf7d61931ed7b88e6e6f8e53d
│  │  ├─ e6
│  │  │  ├─ 61a946fd3e737b9d7073421b1651f328f79a2c
│  │  │  ├─ 9220bb7744eea652b3a161907bd212889fafe6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ 1155642868b94fb7b813565bb8f51cf0f507c6
│  │  │  ├─ 89297fa9e84a3570ee8b8f4cd7249e06827e87
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ e8
│  │  │  └─ 16bed9834ba83e42099b0b131b77f9ddbc0379
│  │  ├─ ea
│  │  │  └─ 8e33fd065f9e2e07537d595045fc0b45d55ff4
│  │  ├─ eb
│  │  │  ├─ 3930585aacadcf4d9ea83f3265e3840a0f47da
│  │  │  └─ 7ba6e92c443599349ffcfe8ffb5aae7ace2cf1
│  │  ├─ ed
│  │  │  ├─ 86f3aa7c4b112b176a30762da34ba7c41acd55
│  │  │  └─ 9fad31de0ec78b368e4b361a650a27cb55f64c
│  │  ├─ ee
│  │  │  └─ ab032ce1807fdc23cb7bf53de748b28a895520
│  │  ├─ ef
│  │  │  └─ 83fe40ae6c2aeb43b17202fa76d3a9a8e0adb0
│  │  ├─ f0
│  │  │  ├─ 4d96c68184f97aed64851fd116260d7370d8d5
│  │  │  ├─ 948747bc5623ef8595bb67ea3d771db333b463
│  │  │  └─ b7dab03699d04d738c29963210d9a839c5d5c5
│  │  ├─ f2
│  │  │  └─ e53097659ba56d51d1490f196fc366828d22b6
│  │  ├─ f3
│  │  │  ├─ ca78f74104a12a77f9c61cfb6510eaf3aeb7b1
│  │  │  └─ e915ee50d925ff53ad0d289a60385a133f6979
│  │  ├─ f4
│  │  │  └─ 3863a0c7390cd5496f3868088d7578971b38cb
│  │  ├─ f5
│  │  │  └─ d7469bfa1a15b08ade495526c01ea3cf615eb1
│  │  ├─ f7
│  │  │  ├─ 15f88e4b12b77e8b7d7947d04df98f61bfac53
│  │  │  └─ fb09ba76df1b4db345f00b9e365608a39049bd
│  │  ├─ f9
│  │  │  └─ 430056f021f1d556557569038257256759e1e0
│  │  ├─ fa
│  │  │  └─ 62646da6ad3d2ab10ad9633f4823bf687b71df
│  │  ├─ fb
│  │  │  └─ 432dd8505be47172bbaad8ae469e69ebf26d49
│  │  ├─ fc
│  │  │  └─ 90b27176375708dc0c0cc916e2886d6031b6fa
│  │  ├─ fd
│  │  │  ├─ 0abd80b3df43348cb617250221b3b31a29a404
│  │  │  ├─ 1ab218347b5a1c49e345fc7fe52fe400a52dc1
│  │  │  └─ cd8a524300f28340363d560bb15ca778dcfc6f
│  │  ├─ fe
│  │  │  └─ 873b5300131785f287ae8390dfc4c9138e93ff
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  ├─ feature
│     │  │  └─ home
│     │  ├─ main
│     │  └─ page
│     │     └─ home
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     ├─ main
│     │     └─ page
│     │        └─ home
│     └─ tags
├─ .github
│  └─ CODEOWNERS
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css.ts
│  ├─ App.tsx
│  ├─ assets
│  ├─ common
│  │  └─ components
│  │     ├─ Form
│  │     └─ MainNavigation
│  │        ├─ MainNavigation.css.ts
│  │        ├─ MainNavigation.tsx
│  │        └─ NavContent
│  │           ├─ NavContent.css.ts
│  │           └─ NavContent.tsx
│  ├─ feature
│  │  └─ target
│  │     ├─ index.ts
│  │     └─ ui
│  │        ├─ HomeTarget
│  │        │  ├─ HomeTarget.css.ts
│  │        │  └─ HomeTarget.tsx
│  │        └─ TargetInput
│  │           ├─ TargetInput.css.ts
│  │           └─ TargetInput.tsx
│  ├─ hooks
│  │  └─ index.ts
│  ├─ index.css
│  ├─ layout
│  │  ├─ RootLayout.css.ts
│  │  └─ RootLayout.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Calender
│  │  │  ├─ CalenderPage.css.ts
│  │  │  └─ CalenderPage.tsx
│  │  ├─ Home
│  │  │  ├─ components
│  │  │  │  ├─ MyTarget
│  │  │  │  │  ├─ MyTarget.css.ts
│  │  │  │  │  └─ MyTarget.tsx
│  │  │  │  ├─ MyTodo
│  │  │  │  │  ├─ MyTodo.css.ts
│  │  │  │  │  ├─ MyTodo.tsx
│  │  │  │  │  └─ Todos
│  │  │  │  │     ├─ Todos.css.ts
│  │  │  │  │     └─ Todos.tsx
│  │  │  │  ├─ SimpleNote
│  │  │  │  │  ├─ SimpleNote.css.ts
│  │  │  │  │  └─ SimpleNote.tsx
│  │  │  │  └─ TodoTask
│  │  │  │     ├─ TodoTask.css.ts
│  │  │  │     └─ TodoTask.tsx
│  │  │  ├─ Home.css.ts
│  │  │  └─ Home.tsx
│  │  ├─ Timer
│  │  │  ├─ TimerPage.css.ts
│  │  │  └─ TimerPage.tsx
│  │  └─ TodoPage
│  │     ├─ TodoPage.css.ts
│  │     └─ TodoPage.tsx
│  ├─ store
│  │  ├─ noteStore.ts
│  │  ├─ targetStore.ts
│  │  └─ todoStore.ts
│  ├─ style.css.ts
│  ├─ types
│  │  └─ index.ts
│  ├─ utils
│  │  ├─ contents.ts
│  │  └─ func.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```