import{l as u,m as _,p,q as h,f as g,g as s,j as n,D as i,u as a,E as t,F as b,x as m,G as f,e as v,y as d,R as x}from"./index-D9ufVuxt.js";const w="/openGenAI/assets/dummy-QKPPn5ii.png",P={class:"container-fluid"},V={class:"row flex-nowrap"},k={class:"col-auto col-md-3 col-lg-3 col-xl-2 px-sm-2 px-0 bg-dark"},C={class:"d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100"},y=s("a",{href:"/",class:"d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"},[s("span",{class:"fs-2 weight-bold d-none d-sm-inline fst-italic fw-bolder text-decoration-underline"},"OpenGenAI"),s("i",{class:"d-md-none"},"OGA")],-1),N={class:"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start",id:"menu"},S={class:"nav-item"},A=s("i",{class:"fs-3 bi-house"},null,-1),B=s("span",{class:"ms-1 d-none d-sm-inline"},"Home",-1),U=s("a",{href:"#submenu1","data-bs-toggle":"collapse",class:"nav-link px-0 align-middle"},[s("i",{class:"fs-4 bi-robot"}),m(),s("span",{class:"ms-1 d-none d-sm-inline"},"ChatBots")],-1),M={class:"collapse show nav flex-column ms-lg-5",id:"submenu1","data-bs-parent":"#menu"},T={class:"w-100"},G=s("i",{class:"fs-4 bi-h-square"},null,-1),L=s("span",{class:"ms-1 d-none d-sm-inline"},"Instruct",-1),R={class:"w-100"},q=s("i",{class:"fs-4 bi-h-square"},null,-1),I=s("span",{class:"ms-1 d-none d-sm-inline"},"Chat",-1),$=f('<li><a href="#" class="nav-link px-0 align-middle"><i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">About</span></a></li><li><a href="#" class="nav-link px-0 align-middle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"><i class="fs-3 bi-gear"></i> <span class="ms-1 d-none d-sm-inline">Settings </span></a></li>',2),j=s("hr",null,null,-1),E={class:"dropdown pb-4"},F=s("a",{href:"#",class:"d-flex align-items-center text-white text-decoration-none dropdown-toggle",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":"false"},[s("img",{src:w,alt:"hugenerd",width:"30",height:"30",class:"rounded-circle"}),s("span",{class:"d-none d-sm-inline mx-1"},"Loggedin")],-1),O={class:"dropdown-menu dropdown-menu-dark text-small shadow"},z=s("li",null,[s("hr",{class:"dropdown-divider"})],-1),D={class:"col .py-3 m-0 p-0"},H={class:"container"},K={class:"offcanvas offcanvas-end bg-light","sdata-bs-scroll":"true","data-bs-backdrop":"static",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},Q=s("div",{class:"offcanvas-header"},[s("h2",{class:"offcanvas-title text-dark",id:"offcanvasNavbarLabel"},"Settings "),s("button",{type:"button",class:"btn-close close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),J={class:"offcanvas-body"},W={class:"row justify-content-center"},X={class:"col-lg-10 my-2"},Y={class:"col-lg-10 my-2"},Z={class:"col-lg-10 my-2"},ss={class:"col-lg-10 my-2"},as={class:"col-lg-10 my-2"},ns={__name:"PageBase",setup(es){const e=u();_();const c=p();h.defaults.headers.common.Authorization=`Bearer ${c.token}`;const r=()=>{localStorage.clear()};return(ls,l)=>(v(),g(b,null,[s("div",P,[s("div",V,[s("div",k,[s("div",C,[y,s("ul",N,[s("li",S,[n(a(d),{to:"/",class:"nav-link align-middle px-0"},{default:i(()=>[A,m(),B]),_:1})]),s("li",null,[U,s("ul",M,[s("li",T,[n(a(d),{to:"/gen",class:"nav-link px-0"},{default:i(()=>[G,L]),_:1})]),s("li",R,[n(a(d),{to:"/chat",class:"nav-link px-0"},{default:i(()=>[q,I]),_:1})])])]),$]),j,s("div",E,[F,s("ul",O,[z,s("li",null,[s("a",{class:"dropdown-item",type:"button",onClick:l[0]||(l[0]=o=>a(c).logout())},"Sign out")])])])])]),s("div",D,[n(a(x))])])]),s("div",H,[s("div",K,[Q,s("div",J,[s("div",W,[s("div",X,[n(t,{modelValue:a(e).modelParams.temperature,"onUpdate:modelValue":l[1]||(l[1]=o=>a(e).modelParams.temperature=o),label:"Temperature",min:0,max:1,step:.1,caliber:a(e).modelParams.temperature,onChange:a(e).changeModelParams},null,8,["modelValue","caliber","onChange"])]),s("div",Y,[n(t,{modelValue:a(e).modelParams.top_p,"onUpdate:modelValue":l[2]||(l[2]=o=>a(e).modelParams.top_p=o),label:"Top_p",caliber:a(e).modelParams.top_p,min:0,max:1,step:.05,onChange:a(e).changeModelParams},null,8,["modelValue","caliber","onChange"])]),s("div",Z,[n(t,{modelValue:a(e).modelParams.top_k,"onUpdate:modelValue":l[3]||(l[3]=o=>a(e).modelParams.top_k=o),label:"Top_k",caliber:a(e).modelParams.top_k,min:0,max:100,step:5,onChange:a(e).changeModelParams},null,8,["modelValue","caliber","onChange"])]),s("div",ss,[n(t,{modelValue:a(e).modelParams.n_ctx,"onUpdate:modelValue":l[4]||(l[4]=o=>a(e).modelParams.n_ctx=o),label:"num_ctx",caliber:a(e).modelParams.n_ctx,min:126,max:8192,step:126,onChange:a(e).changeModelParams},null,8,["modelValue","caliber","onChange"])]),s("div",as,[n(t,{modelValue:a(e).modelParams.seed,"onUpdate:modelValue":l[5]||(l[5]=o=>a(e).modelParams.seed=o),label:"seed",caliber:a(e).modelParams.seed,min:0,max:100,onChange:a(e).changeModelParams},null,8,["modelValue","caliber","onChange"])]),s("div",{class:"col-lg-10 my-3"},[s("button",{class:"btn btn-sm btn-outline-warning",onClick:r},"reset")])])])])])],64))}};export{ns as default};
