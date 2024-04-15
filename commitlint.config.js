export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [1, "always", 72],
    "body-max-length": [0, "always", 100],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
  //@commitlint/cz-commitlint
  // prompt: {
  //   messages: {
  //     skip: ":skip",
  //     max: "upper %d chars",
  //     min: "%d chars at least",
  //     emptyWarning: "can not be empty",
  //     upperLimitWarning: "over limit",
  //     lowerLimitWarning: "below limit",
  //   },
  //   questions: {
  //     type: {
  //       description: "Select the type of change that you're committing:",
  //       enum: {
  //         feat: {
  //           description: "새로운 기능",
  //           title: "Features",
  //           emoji: "✨",
  //         },
  //         fix: {
  //           description: "버그 픽스",
  //           title: "Bug Fixes",
  //           emoji: "🐛",
  //         },
  //         docs: {
  //           description: "문서만 변경",
  //           title: "Documentation",
  //           emoji: "📝",
  //         },
  //         style: {
  //           description:
  //             "프로덕션 코드의 변경 이외의 작업(white-space, formatting, missing semi-colons, etc)",
  //           title: "Styles",
  //           emoji: "🎨",
  //         },
  //         refactor: {
  //           description: "버그를 수정하거나 기능을 추가하지 않는 코드 변경",
  //           title: "Code Refactoring",
  //           emoji: "♻️",
  //         },
  //         perf: {
  //           description: "성능 향상을 위한 코드 변경",
  //           title: "Performance Improvements",
  //           emoji: "⚡",
  //         },
  //         test: {
  //           description: "누락된 테스트 추가 또는 기존 테스트 수정",
  //           title: "Tests",
  //           emoji: "✅",
  //         },
  //         build: {
  //           description:
  //             "빌드 시스템 또는 외부 종속성(example scopes: gulp, broccoli, npm)에 영향을 미치는 변경 사항",
  //           title: "Builds",
  //           emoji: "🛠",
  //         },
  //         ci: {
  //           description: "CI 구성 파일 및 스크립트 변경",
  //           title: "Continuous Integrations",
  //           emoji: "⚙️",
  //         },
  //         chore: {
  //           description: "Other changes that don't modify src or test files",
  //           title: "Chores",
  //           emoji: "♻️",
  //         },
  //         revert: {
  //           description: "이전 커밋으로 되돌리기",
  //           title: "Reverts",
  //           emoji: "🗑",
  //         },
  //       },
  //     },
  //   },
  // },
};
