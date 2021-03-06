const rules = require("./rules-sidebar");

module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "getting-started",
        "command-line-usage",
        "configuration",
        "template-languages",
      ],
    },
    {
      type: "category",
      label: "Rules",
      collapsed: false,
      items: ["rules/all", ...rules],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: ["reference/ideas", "reference/integrations"],
    },
  ],
};
