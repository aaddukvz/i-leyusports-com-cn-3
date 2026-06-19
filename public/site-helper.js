function createSiteHelper() {
  const config = {
    siteUrl: "https://i-leyusports.com.cn",
    brandName: "乐鱼体育",
    keywords: ["体育赛事", "电竞", "比分直播", "乐鱼体育", "赛事资讯"],
    cards: [
      { title: "热门赛事", description: "实时追踪各大体育联赛动态", icon: "⚽" },
      { title: "电竞专区", description: "覆盖主流电竞项目数据", icon: "🎮" },
      { title: "比分直播", description: "即时比分与赛程一目了然", icon: "📊" }
    ]
  };

  function generateTagBadge(keyword) {
    const span = document.createElement("span");
    span.className = "keyword-badge";
    span.textContent = keyword;
    return span;
  }

  function generateCard(card) {
    const container = document.createElement("div");
    container.className = "info-card";
    const icon = document.createElement("span");
    icon.className = "card-icon";
    icon.textContent = card.icon;
    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = card.title;
    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = card.description;
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(desc);
    return container;
  }

  function buildBadgeRow(keywords) {
    const wrapper = document.createElement("div");
    wrapper.className = "badge-row";
    keywords.forEach(function(kw) {
      wrapper.appendChild(generateTagBadge(kw));
    });
    return wrapper;
  }

  function buildCardList(cards) {
    const list = document.createElement("div");
    list.className = "card-list";
    cards.forEach(function(card) {
      list.appendChild(generateCard(card));
    });
    return list;
  }

  function buildAccessHint() {
    const hint = document.createElement("div");
    hint.className = "access-hint";
    hint.innerHTML = '<span class="hint-label">💡 访问提示</span> 本页面为 <a href="' + config.siteUrl + '" target="_blank" rel="noopener">' + config.siteUrl + '</a> 的辅助脚本，为您展示来自 <strong>' + config.brandName + '</strong> 的相关服务卡片与关键词标签。';
    return hint;
  }

  function init() {
    const root = document.getElementById("site-helper-root");
    if (!root) return;
    root.appendChild(buildAccessHint());
    root.appendChild(buildBadgeRow(config.keywords));
    root.appendChild(buildCardList(config.cards));
  }

  window.siteHelper = {
    init: init,
    config: config
  };
}

(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      createSiteHelper();
      window.siteHelper.init();
    });
  } else {
    createSiteHelper();
    window.siteHelper.init();
  }
})();