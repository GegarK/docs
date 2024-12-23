import{_ as s,K as o,L as d,M as e,N as i,a5 as t,W as a,F as r}from"./framework-edebdfe1.js";const l={},c=a(`<h1 id="其它环境" tabindex="-1"><a class="header-anchor" href="#其它环境" aria-hidden="true">#</a> 其它环境</h1><h2 id="linux加入ad域" tabindex="-1"><a class="header-anchor" href="#linux加入ad域" aria-hidden="true">#</a> Linux加入AD域</h2><ul><li>修改DNS</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>sudo vim /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),u={href:"https://github.com/PierreGode/Linux-Active-Directory-join-script",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"mac加入ad域",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac加入ad域","aria-hidden":"true"},"#"),i(" MAC加入AD域")],-1),h=e("li",null,"修改DNS",-1),v={href:"https://github.com/PierreGode/Linux-Active-Directory-join-script",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>#this is a very simple scipt to automate MacOS AD join
#Note that Apple is going away from AD
#Recomended solution is Nomad https://nomad.menu/products/#nomad
echo &quot;this script needs to be configured to funktion&quot;
echo &quot;if you already did it then edit this file and uncomment row 6 with a # in the beginning&quot;
exit
# to automate ADjoin check the variables below and find a solution to get from you AD or just type the name of next object in list &quot;next computer object&quot;

DOMAIN=$(test.com)	    		              ## Domain
admin=$(admin)			      	              ## AD admin //Note this user can med active directory admin or a user with permission to join domain.
pass=$(password)		      	              ## AD admin pass //Note this row is NOT encrypted, coution using this, password might be stored in logs.
adgroup=$(whatevergroup)                              ## this is to give admin privileges to a group in the active directory ex: MacAdmins
ADcomputer=$(MACagent01 )			      ## desired computer object name ( this will only be the name of the computer object in Active Directory, hostname is still the same as default)
OU=$(OU=Computers Mac,DC=domain,DC=com)		      ## desired OU were the computer object is created

sudo dsconfigad -add $DOMAIN -mobile enable -mobileconfirm disable -localhome enable -protocol smb -shell &#39;/bin/bash&#39; -username $admin -password $pass -groups $adgroup -computer $ADcomputer -ou $OU
sudo dsconfig -show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function p(g,f){const n=r("ExternalLinkIcon");return o(),d("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[i("安装脚本"),t(n)])])]),m,e("ul",null,[h,e("li",null,[e("a",v,[i("安装脚本"),t(n)])])]),b])}const x=s(l,[["render",p],["__file","linux.html.vue"]]);export{x as default};
