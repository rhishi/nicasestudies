var versaTag = {};
versaTag.id = "4042";
versaTag.sync = 0;
versaTag.dispType = "js";
if (window.location.protocol != "https:") versaTag.ptcl = "HTTP";
else versaTag.ptcl = "HTTPS";
versaTag.bsUrl = "bs.serving-sys.com/BurstingPipe";
versaTag.activityParams = {
"Session":""
};
versaTag.retargetParams = {};
versaTag.dynamicRetargetParams = {};
versaTag.conditionalParams = {};

var scriptElement = document.createElement("script");
scriptElement.id = "ebOneTagUrlId";
if (window.location.protocol != "https:") scriptElement.src = "http://ds.serving-sys.com/SemiCachedScripts/ebOneTag.js";
else scriptElement.src = "https://secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js";
document.body.appendChild(scriptElement);

var noscriptElement = document.createElement("noscript");
var iframeElement = document.createElement("noscript");
iframeElement.src = "?cn=ot&amp;onetagid=4042&amp;ns=1&amp;activityValues=$$Session=[Session]$$&amp;retargetingValues=$$$$&amp;dynamicRetargetingValues=$$$$&amp;acp=$$$$&amp;";
iframeElement.style = "display:none;width:0px;height:0px";
noscriptElement.appendChild(iframeElement);
document.body.appendChild(noscriptElement);
