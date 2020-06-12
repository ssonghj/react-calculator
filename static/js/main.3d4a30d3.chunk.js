(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),l=n.n(i),c=(n(22),n(3)),s=n(4),u=n(6),o=n(5),d=n(7),p=n(1),h=n(2);function b(){var e=Object(p.a)(["\n  margin: 10px auto;\n  width: 300px;\n  padding: 10px;\n  border: 2px solid #000;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n"]);return b=function(){return e},e}var g=h.a.div(b()),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.createElement(g,null,this.props.children)}}]),t}(a.Component);function x(){var e=Object(p.a)(["\n  padding: 5px;\n  [data-display] {\n    border-radius: 5px;\n    border: 2px solid #000;\n    height: 60px;\n    line-height: 60px;\n    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n    text-align: left;\n    font-size: 18px;\n    font-weight: bold;\n    padding: 0 15px;\n    color: #000;\n  }\n"]);return x=function(){return e},e}var y=h.a.div(x()),m=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.createElement(y,null,a.createElement("div",{"data-testid":"display","data-display":!0},this.props.displayValue))}}]),t}(a.Component);function v(){var e=Object(p.a)(['\n  :after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n']);return v=function(){return e},e}var O=h.a.div(v()),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){n.props.onClickButton(e.target.textContent)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.createElement(O,{onClick:this.handleClick},this.props.children)}}]),t}(a.Component);function E(){var e=Object(p.a)(["\n  float: left;\n  width: ",'%;\n  padding: 5px;\n  button {\n    :focus {\n      outline: none;\n    }\n    :hover {\n      background: #eee;\n    }\n    :active {\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    color: #000;\n    font-size: 20px;\n    line-height: 40px;\n    font-weight: bold;\n    cursor: pointer;\n    width: 100%;\n    background: transparent;\n    border-radius: 5px;\n    border: 2px solid #000;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n\n    &[data-color="gray"] {\n      background: #eee;\n      :hover {\n        background: #ccc;\n      }\n    }\n  }\n']);return E=function(){return e},e}var w=h.a.div(E(),function(e){return e.size/4*100}),V=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=void 0===t?1:t,r=e.color,i=e.children;return a.createElement(w,{size:n},a.createElement("button",{"data-color":r},i))}}]),t}(a.Component);function k(){var e=Object(p.a)(["\n  width: 300px;\n  height: 374px;\n  padding: 10px;\n  margin: 20px auto;\n  border: 2px solid #000;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n  ::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"]);return k=function(){return e},e}var S=h.a.div(k()),z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.createElement(S,{"data-testid":"history",onClick:this.props.button},this.props.children)}}]),t}(a.Component);function C(){var e=Object(p.a)(["\n  display: inline-block;\n  width: 270px;\n  height: 65px;\n  padding: 10px;\n  border: 2px solid #000;\n  border-radius: 5px;\n  text-align: right;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n  margin-bottom: 10px;\n  cursor: pointer;\n  h3 {\n    margin: 0px;\n  }\n"]);return C=function(){return e},e}function q(){var e=Object(p.a)(["\n  margin: 30px auto;\n  text-align: center;\n"]);return q=function(){return e},e}var M,B=h.a.div(q()),I=h.a.div(C()),A=function e(t){return t.includes("\u221a")?(t.replace("(",""),t.replace(")",""),t=t.replace("\u221a",""),new Function("return ("+Math.sqrt(e(t))+")")()):(t=(t=t.replace(/\xf7/gi,"/")).replace(/\xd7/gi,"*"),new Function("return ("+t+")")())},F=100,J=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={displayValue:"",history:M=[]},n.ClickButton=function(e){console.log(e.target),n.setState({displayValue:e.target.getAttribute("display")})},n.onClickButton=function(e){var t=n.state.displayValue,a=void 0===t?"":t,r=(a=""+a).substr(a.length-1),i=["\xf7","\xd7","-","+",".","\u221a"],l={AC:function(){n.setState({displayValue:""})},BS:function(){a.length>0&&(a=a.substr(0,a.length-1)),n.setState({displayValue:a})},"\u221a":function(){0!=a.length&&(""===r||i.includes(r)||(M[F]="\u221a("+a+")",n.setState({displayValue:"\u221a("+a+")"})),""!==r&&(a.includes("+")||a.includes("-")||a.includes("\xd7")||a.includes("\xf7"))?(a=a.includes("\xd7")?Math.sqrt(A(a.replace(/\xd7/gi,"*"))):a.includes("\xf7")?Math.sqrt(A(a.replace(/\xf7/gi,"/"))):Math.sqrt(A(a.replace("\u221a",""))),n.setState({displayValue:a})):a.includes("\u221a")?(a=Math.sqrt(A(a)),n.setState({displayValue:a})):(a=Math.sqrt(a.substr(0,a.length)),n.setState({displayValue:a})),F--,n.setState({displayValue:a}))},"\xf7":function(){""===r||i.includes(r)||n.setState({displayValue:a+"\xf7"})},"\xd7":function(){""===r||i.includes(r)||n.setState({displayValue:a+"\xd7"})},"-":function(){""===r||i.includes(r)||n.setState({displayValue:a+"-"})},"+":function(){""===r||i.includes(r)||n.setState({displayValue:a+"+"})},"=":function(){M[F]=a,a.includes("\u221a")?(a=(a=(a=a.replace("\u221a","")).replace("(","")).replace(")",""),""!==r&&(a.includes("+")||a.includes("-")||a.includes("\xd7")||a.includes("\xf7"))?(a=a.includes("\xd7")?Math.sqrt(A(a.replace(/\xd7/gi,"*"))):a.includes("\xf7")?Math.sqrt(A(a.replace(/\xf7/gi,"/"))):Math.sqrt(A(a.replace("\u221a",""))),n.setState({displayValue:a})):(a=Math.sqrt(a.substr(0,a.length)),n.setState({displayValue:a}))):""!==r&&i.includes(r)?a=a.substr(0,a.length-1):""!==r&&a.includes("\xd7")?a=A(a.replace(/\xd7/gi,"*")):""!==r&&a.includes("\xf7")?a=A(a.replace(/\xf7/gi,"/")):""!==r&&(a=A(a)),F--,n.setState({displayValue:a})},".":function(){var e=a.includes("+")||a.includes("-")||a.includes("\xd7")||a.includes("\xf7");a.includes(".")&&!e||""===r||i.includes(r)||e||n.setState({displayValue:a+"."}),"."==r||a.substring(a.lastIndexOf("+"),a.length).includes(".")||""!==r&&!i.includes(r)&&e&&n.setState({displayValue:a+"."}),"."==r||a.substring(a.lastIndexOf("-"),a.length).includes(".")||""!==r&&!i.includes(r)&&e&&n.setState({displayValue:a+"."}),"."==r||a.substring(a.lastIndexOf("\xd7"),a.length).includes(".")||""!==r&&!i.includes(r)&&e&&n.setState({displayValue:a+"."}),"."==r||a.substring(a.lastIndexOf("\xf7"),a.length).includes(".")||""!==r&&!i.includes(r)&&e&&n.setState({displayValue:a+"."})},0:function(){0!==Number(a)&&(a+="0",n.setState({displayValue:a}))}};l[e]?l[e]():n.setState({displayValue:a+e})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.createElement(B,null,a.createElement(f,null,a.createElement(m,{displayValue:this.state.displayValue}),a.createElement(j,{onClickButton:this.onClickButton},a.createElement(V,{size:1,color:"gray"},"AC"),a.createElement(V,{size:1,color:"gray"},"BS"),a.createElement(V,{size:1,color:"gray"},"\u221a"),a.createElement(V,{size:1,color:"gray"},"\xf7"),a.createElement(V,{size:1},"7"),a.createElement(V,{size:1},"8"),a.createElement(V,{size:1},"9"),a.createElement(V,{size:1,color:"gray"},"\xd7"),a.createElement(V,{size:1},"4"),a.createElement(V,{size:1},"5"),a.createElement(V,{size:1},"6"),a.createElement(V,{size:1,color:"gray"},"-"),a.createElement(V,{size:1},"1"),a.createElement(V,{size:1},"2"),a.createElement(V,{size:1},"3"),a.createElement(V,{size:1,color:"gray"},"+"),a.createElement(V,{size:2},"0"),a.createElement(V,{size:1},"."),a.createElement(V,{size:1,color:"gray"},"="))),a.createElement(z,{button:this.ClickButton},this.state.history.map(function(e){return a.createElement(I,{display:e},e,a.createElement("br",null)," = "+A(e))})))}}]),t}(a.Component);l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.3d4a30d3.chunk.js.map