(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{13:function(t,e,n){t.exports=n("aAf4")},NzAu:function(t,e){t.exports=ReactDOMFactories},aAf4:function(t,e,n){"use strict";n.r(e);var o,s=n("cDcd"),r=n("NzAu"),i=function(t,e){return function(){return t.apply(e,arguments)}},u={}.hasOwnProperty;o=s.createElement;var a=function(t){function e(t){this.$uploadButton=i(this.$uploadButton,this),this.render=i(this.render,this),this.componentWillUnmount=i(this.componentWillUnmount,this),this.componentDidMount=i(this.componentDidMount,this),e.__super__.constructor.call(this,t),this.state={state:""}}return function(t,e){for(var n in e)u.call(e,n)&&(t[n]=e[n]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype}(e,t),e.prototype.setOverlay=function(t){if(!this.props.disabled)return this.setState({state:t})},e.prototype.componentDidMount=function(){var t,e,n,o,s;switch(this.props.contest.type){case"art":n=[".jpg",".jpeg",".png"],o=4e6;break;case"beatmap":n=[".osu",".osz"],o=2e7;break;case"music":n=[".mp3"],o=15e6}return t=$(".js-contest-entry-upload--dropzone"),e=$("<input>",{class:"js-contest-entry-upload fileupload__input",type:"file",name:"entry",accept:n.join(","),disabled:this.props.disabled}),$(this.uploadButtonContainer).append(e),$.subscribe("dragenterGlobal.contest-upload",(s=this,function(){return s.setOverlay("active")})),$.subscribe("dragendGlobal.contest-upload",function(t){return function(){return t.setOverlay("hidden")}}(this)),$(document).on("dragenter.contest-upload",".contest-userentry--uploader",function(t){return function(){return t.setOverlay("hover")}}(this)),$(document).on("dragleave.contest-upload",".contest-userentry--uploader",function(t){return function(){return t.setOverlay("active")}}(this)),this.$uploadButton().fileupload({url:laroute.route("contest-entries.store"),dataType:"json",dropZone:t,sequentialUploads:!0,formData:{contest_id:this.props.contest.id},add:function(t){return function(e,s){var r,i;if(!t.props.disabled)if(i=s.files[0],r=/(\.[^.]+)$/.exec(i.name)[1],_.includes(n,r)){if(!(i.size>o))return s.submit();osu.popup(osu.trans("contest.entry.too_big",{limit:osu.formatBytes(o,0)}),"danger")}else osu.popup(osu.trans("contest.entry.wrong_type."+t.props.contest.type),"danger")}}(this),submit:function(){return $.publish("dragendGlobal")},done:function(t,e){return $.publish("contest:entries:update",{data:e.result})},fail:osu.fileuploadFailCallback(this.$uploadButton)})},e.prototype.componentWillUnmount=function(){return $.unsubscribe(".contest-upload"),$(document).off(".contest-upload"),this.$uploadButton().fileupload("destroy").remove()},e.prototype.render=function(){var t,e;return t=["fileupload","contest-userentry","contest-userentry--uploader",this.props.disabled?"disabled":void 0,"active"===this.state.state?"contest-userentry--dragndrop-active":void 0,"hover"===this.state.state?"contest-userentry--dragndrop-hover":void 0],Object(r.div)({className:"contest-userentry contest-userentry--new"+(this.props.disabled?" contest-userentry--disabled":"")},Object(r.div)({className:"js-contest-entry-upload--dropzone"},o("label",{className:t.join(" "),ref:(e=this,function(t){return e.uploadButtonContainer=t})},Object(r.i)({className:"fas fa-plus contest-userentry__icon"}),Object(r.div)({},osu.trans("contest.entry.drop_here")))))},e.prototype.$uploadButton=function(){return $(this.uploadButtonContainer).find(".js-contest-entry-upload")},e}(s.Component),c=function(t,e){return function(){return t.apply(e,arguments)}},p={}.hasOwnProperty;s.createElement;var l,d=function(t){function e(){return this.delete=c(this.delete,this),e.__super__.constructor.apply(this,arguments)}return function(t,e){for(var n in e)p.call(e,n)&&(t[n]=e[n]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype}(e,t),e.prototype.delete=function(t){var e;return t.preventDefault(),e={method:"DELETE",dataType:"json"},$.ajax(laroute.route("contest-entries.destroy",{contest_entry:this.props.entry.id}),e).done((function(t){return $.publish("contest:entries:update",{data:t})})).fail(osu.ajaxError)},e.prototype.render=function(){return Object(r.div)({className:"contest-userentry contest-userentry--ok"},this.props.locked?void 0:Object(r.a)({className:"btn-osu btn-osu--textlike btn-osu--stick-right",href:"#","data-confirm":osu.trans("common.confirmation"),title:osu.trans("common.buttons.delete"),onClick:this.delete},Object(r.i)({className:"fas fa-times"})),Object(r.div)({className:"contest-userentry__fileicon"},Object(r.i)({className:"far fa-file"})),Object(r.div)({className:"contest-userentry__filename u-ellipsis-overflow"},this.props.entry.filename),Object(r.div)({className:"contest-userentry__entry-date",dangerouslySetInnerHTML:{__html:osu.timeago(this.props.entry.created_at)}}),Object(r.div)({className:"contest-userentry__filesize"},osu.formatBytes(this.props.entry.filesize)))},e}(s.Component),f=function(t,e){return function(){return t.apply(e,arguments)}},h={}.hasOwnProperty;l=s.createElement;var y,m=function(t){function e(t){this.handleUpdate=f(this.handleUpdate,this),e.__super__.constructor.call(this,t),this.state={contest:this.props.contest,userEntries:this.props.userEntries}}return function(t,e){for(var n in e)h.call(e,n)&&(t[n]=e[n]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype}(e,t),e.prototype.handleUpdate=function(t,e){var n;return n=e.data,this.setState({userEntries:n})},e.prototype.componentDidMount=function(){return $.subscribe("contest:entries:update.contest",this.handleUpdate)},e.prototype.componentWillUnmount=function(){return $.unsubscribe(".contest")},e.prototype.render=function(){var t,e,n,o;return e=moment(this.state.contest.entry_starts_at).diff()<=0&&moment(this.state.contest.entry_ends_at).diff()>=0,t=(n=this.state.userEntries?this.state.userEntries:[]).map((o=this,function(t,n){return l(d,{key:n,entry:t,contest_id:o.state.contest.id,locked:!e})})),!e&&_.isEmpty(n)?null:Object(r.div)({className:"contest-userentry-list"},t,l(a,{contest:this.state.contest,disabled:!e||this.state.userEntries.length>=this.state.contest.max_entries}))},e}(s.Component);y=function(){var t,e;return t=osu.parseJson("json-contest"),e=osu.parseJson("json-userEntries"),{contest:t.contest,userEntries:e}},reactTurbolinks.register("userContestEntry",m,y)},cDcd:function(t,e){t.exports=React}},[[13,0]]]);
//# sourceMappingURL=contest-entry.js.map