(()=>{var l={disqus:{shortname:"hugo-minima"},enable:!0,giscus:{category:"Comments",categoryid:"DIC_kwDOFxMJvc4CScQm",inputposition:"buttom",mapping:"pathname",metadata:!1,reactions:!0,repo:"mivinci/hugo-theme-minima",repoid:"MDEwOlJlcG9zaXRvcnkzODcxMjM2NDU="},provider:"giscus",utterances:{issueterm:"pathname",label:"comment",repo:"mivinci/hugo-theme-minima"}},u="light";var h=!0;var o=["\u{1F31A}","\u{1F31D}"];var w=l.provider,p=u,d=o[1],f=o[0],n=p==="system"?"light":p,y="dark",s,i,c;function g(e){s||(s=document.getElementById(e)),s.innerHTML=localStorage.theme===n?d:f,s.addEventListener("click",k)}function k(){let e=localStorage.getItem("theme"),t=e===n?y:n;switch(v(e,t),w){case"utterances":M(`github-${t}`);break;case"giscus":E(t);break;default:}}function v(e,t){let{classList:r}=document.documentElement,b=t===n?d:f;r.remove(e),r.add(t),localStorage.setItem("theme",t),s.innerHTML=b}function M(e){e!=="dark"&&(e="light"),i=i||document.querySelector("iframe.utterances-frame"),i&&i.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function E(e){e!=="dark"&&(e="light_protanopia"),c=c||document.querySelector("iframe.giscus-frame"),c&&c.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}function _(){h||(document.documentElement.style="user-select:none")}g("theme-switch");_();})();
