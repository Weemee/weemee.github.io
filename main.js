(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		244: function (e, t, o) {
			var r = o(602);
			'string' == typeof r && (r = [[e.i, r, '']]);
			var i = { hmr: !0, transform: void 0, insertInto: void 0 };
			o(604)(r, i);
			r.locals && (e.exports = r.locals);
		},
		256: function (e, t, o) {
			o(257), o(606), (e.exports = o(244));
		},
		600: function (e, t) {},
		602: function (e, t, o) {
			(e.exports = o(603)(!1)).push([
				e.i,
				'@use "constants" as *;span{user-select:none}.dg .a{float:left}a,a:link,a:visited{text-decoration:none;color:inherit}a:hover{text-decoration:underline;color:inherit}a:active{text-decoration:none;color:inherit}html{font-family:sans-serif}#sessionCanvas{width:100%;height:100%}.middle-screen{width:400px;margin-left:auto;margin-right:auto;margin-top:320px}#sessionCanvas:-webkit-full-screen{width:100%!important;height:100%!important}.talentTopPanel{flex:1;min-height:10%;max-height:10%;padding:10px;box-shadow:0 1px 4px #000}#talentContentPanel{padding:15px}#designerArea{position:fixed;background-color:#f0f8ff;border-radius:2px;border-color:#000;color:#000;height:40%;width:60%;bottom:7%;left:20%;z-index:99}#menuShaderDimThing{position:fixed;background-color:rgba(0,0,0,.4);height:100%;width:100%;animation:fadein .33s;-webkit-animation:fadein .33s;z-index:933}@keyframes fadein{0%{opacity:0}to{opacity:1}}body{background-color:#fff!important;overflow:hidden;overflow-y:scroll}@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}#menuArea{position:fixed;background-color:#f0f8ff;border-radius:2px;border-color:#000;color:#000;height:60%;width:34%;bottom:20%;left:33%;z-index:999}.dg.ac{z-index:2}#visualArea{position:fixed;background-color:#000;border-radius:2px;border-color:#c5c5c5;color:#e2e2e2;height:100%;width:100%}#visualCanvas,#wrapper{position:absolute;width:100%;height:100%}#wrapper{overflow:hidden}#background-renderer{z-index:-1}.fixed{position:fixed}.full-height{height:100%}#authentication{width:100vw;height:100vh}#contentWrapper{overflow-y:scroll;margin-top:80px;height:calc(100vh - 80px * 2);float:right;width:calc(80vw - 80px);margin-right:80px;display:flex;position:relative}.flex-display{display:flex}#session,.transparent-bg{background-color:transparent!important}#session{width:100vw}#3DGraphics,#sessionCanvas{position:absolute;height:100%!important;width:100%!important}.userInterface{position:fixed;bottom:0;width:100%;height:60px}#bottomBar{position:relative;width:285px;margin:auto}.toggleGridBtn{position:fixed;left:0;top:0}.newThing{position:absolute;width:12px;height:24px;margin-top:-16px;margin-left:26px;text-align:center;border:2px solid orange;border-radius:3px}.hideScroll{width:1600%;height:calc(100% - 42px);overflow-y:auto}::-webkit-scrollbar{display:none}.periodicElement{position:absolute;width:5.55556%;height:10%;box-shadow:0 0 12px rgba(34,170,248,.5);border:1px solid rgba(127,255,255,.25);text-align:center;cursor:default}.periodicElement .periodicSymbol{top:10px;left:0;right:0;font-size:24px;font-weight:700}.periodicElement .periodicNumber,.periodicElement .periodicSymbol{position:absolute;color:hsla(0,0%,100%,.75);text-shadow:0 0 10px rgba(32,212,212,.726)}.periodicElement .periodicNumber{top:0;left:2px;font-size:14px}.periodicElement .periodicMass{position:absolute;top:38px;left:0;right:0;font-size:12px;color:hsla(0,0%,100%,.75)}.periodicElement .resourceAmount{position:absolute;top:52px;left:0;right:0;font-size:14px;color:hsla(0,0%,100%,.75)}.periodicElement:hover{box-shadow:0 0 12px rgba(0,255,255,.75);border:1px solid rgba(127,255,255,.75)}.dnd-list-area{width:50px;max-width:93.5px;height:50px;background:#666;border:1px solid #333;border-radius:5px;box-shadow:1px 1px 3px rgba(0,0,0,.3);flex:0 0 10%;min-height:99.1%;overflow:hidden}.dnd-list-area,.dnd-test-area{position:relative;z-index:2222;margin:3px;user-select:none}.dnd-test-area{width:85px;height:85px;border-radius:5px}.dnd-test-area.\\--selection{background:#b9b9b9;text-align:center}.dnd-test-area.\\--drop{background:#666;min-height:99.1%;text-align:center;flex:1}.dnd-test-area .layer{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.55;padding:37px 0 0;color:#fff}.dnd-test-area .invalid{background-color:rgba(100,13,47,.404)}.dnd-test-area .valid{background-color:rgba(36,230,220,.568)}.dnd-test-area .yellow{border:1px solid #ff0;background-color:#ff0;color:#000}.dnd-test-area .red{border:1px solid red;background-color:red}.dnd-test-area .blue{border:1px solid #add8e6;background-color:#add8e6}#molecule-builder{position:relative;display:flex;overflow:auto;flex-wrap:wrap;flex-direction:row;align-items:flex-start;align-content:flex-start;height:-webkit-fill-available}.item{position:absolute;z-index:3;width:85px;height:85px;line-height:1;font-size:18px}.item.dragging{opacity:.5}.item .item-layer{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%}.item .item-name{display:flex;color:#aaa;justify-content:center;align-items:center}.item .item-name span{overflow:visible;white-space:nowrap}.item.highlight-selection{box-shadow:0 0 9px 8px #186c9d;border-radius:50%}.item .item-count{display:flex;color:#eee;justify-content:flex-end;align-items:flex-end}.resourceElementsContainer{width:70%;height:80%;top:5%;left:0;z-index:98}.locationContainer,.resourceElementsContainer{position:absolute;border-style:solid;border-width:2px;background-color:rgba(92,137,137,.9)}.locationContainer{width:40%;height:20%;left:10%}.item-context-menu{position:absolute;width:200px;border-style:solid;border-width:3px;top:20px;left:40px;background-color:#8d7272;z-index:99999}.item-context-menu .context-menu-slice{flex:1;position:relative;width:100%;background-color:#d3e4f3;color:#000;font-size:16px}.item-context-menu .context-menu-slice:hover{background-color:#86aed1;cursor:pointer}#assembler-button-bar{position:absolute;z-index:2223;left:12%;top:1.4%}#assembler-button-bar .selected-mode{background-color:#095592!important;color:#fff!important}#assembler-button-bar .selected-mode:hover{color:#fff!important}.buildingsContainer{width:30%;height:40%;top:20%;z-index:99}.buildingsContainer,.levelsContainer{position:absolute;border-style:solid;border-width:2px;background-color:rgba(92,137,137,.9);right:0}.levelsContainer{width:20%;height:20%;top:0}.craftingContainer{width:70%;height:70%;bottom:15%;right:5%;z-index:101}.craftingContainer,.researchContainer{position:absolute;border-style:solid;border-width:2px;background-color:rgba(92,137,137,.9)}.researchContainer{width:30%;height:30%;bottom:10%;right:0}.statsContainer{width:10%;height:15%;bottom:0;left:0}.statsContainer,.talentsContainer{position:absolute;border-style:solid;border-width:2px;background-color:rgba(92,137,137,.9)}.talentsContainer{width:60%;height:60%;bottom:20%;left:20%;z-index:100}.object-tooltip{position:absolute;background:rgba(0,0,0,.9);box-shadow:2px 2px 5px rgba(0,0,0,.3);padding:4px 8px;color:#eee;z-index:64500;width:auto;min-width:100px;max-width:325px;border-radius:3px}.object-tooltip .description,.object-tooltip .name{font-size:120%;color:cyan}.object-tooltip .cost{font-size:120%;color:#fff}.object-tooltip .time{font-size:120%;color:#ba55d3}#onlinePlayersHeader{position:relative;background:gray;color:#fff;width:10%;margin:0 auto;padding:5px;text-align:center}#cool-loader{position:fixed;height:100%;width:100%;overflow:hidden;z-index:99999;background:#1e1e1e}#cool-loader .react-spinner-loader-svg{position:relative;margin:0 auto;width:128px;margin-top:20%;text-align:center;color:#fff}#cool-loader .react-spinner-loader-svg svg{-webkit-transform-origin:50% 65%;transform-origin:50% 65%}#cool-loader .react-spinner-loader-svg svg polygon{stroke-dasharray:17;-webkit-animation:dash 2.5s cubic-bezier(.35,.04,.63,.95) infinite;animation:dash 2.5s cubic-bezier(.35,.04,.63,.95) infinite}@-webkit-keyframes dash{to{stroke-dashoffset:136}}@keyframes dash{to{stroke-dashoffset:136}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',
				'',
			]);
		},
		606: function (e, t, o) {
			'use strict';
			o.r(t);
			var r = o(0),
				i = o.n(r),
				n = o(114),
				a = o.n(n),
				s = o(55),
				l = o(54),
				c = (o(466), o(249)),
				d = o(242),
				p = o(120),
				b = o(48);
			function h(e, t) {
				var o = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						o.push.apply(o, r);
				}
				return o;
			}
			function f(e) {
				for (var t = 1; t < arguments.length; t++) {
					var o = null != arguments[t] ? arguments[t] : {};
					t % 2
						? h(Object(o), !0).forEach(function (t) {
								m(e, t, o[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
						: h(Object(o)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
						  });
				}
				return e;
			}
			function m(e, t, o) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = o),
					e
				);
			}
			const x = { init: !0 };
			var g = function (e = x, t) {
				switch (t.type) {
					case 'INIT_DONE':
						return f(f({}, e), {}, { init: !1 });
				}
				return e;
			};
			function u(e, t) {
				var o = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						o.push.apply(o, r);
				}
				return o;
			}
			function j(e) {
				for (var t = 1; t < arguments.length; t++) {
					var o = null != arguments[t] ? arguments[t] : {};
					t % 2
						? u(Object(o), !0).forEach(function (t) {
								v(e, t, o[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
						: u(Object(o)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
						  });
				}
				return e;
			}
			function v(e, t, o) {
				return (
					t in e
						? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = o),
					e
				);
			}
			const y = { loggedIn: !1 };
			var O = function (e = y, t) {
				switch (t.type) {
					case 'ACCOUNT_DETAILS':
						return j(j({}, e), {}, { account: j(j({}, e.account), t.payload) });
				}
				return e;
			};
			var w = (e) => Object(l.c)({ account: O, app: g, router: Object(p.b)(e) }),
				k = o(117),
				C = o(15);
			o(600);
			const N = '#bf4885',
				S = '#db9c45',
				z = '#774e9f',
				I = '#111',
				T = 'transparent',
				A = '#f3f3f4',
				B = '#016ea0',
				P = '#c4c4c4',
				E = '#898989';
			var D = o(608),
				R = o(630),
				H = o(4);
			const L = Object(D.a)(() => ({
				root: { display: 'flex', flexDirection: 'column' },
				area: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' },
				middleBox: { flex: 0.3, display: 'flex', background: P, flexDirection: 'column', padding: 20 },
				boxTitle: { fontWeight: 'bold', paddingBottom: 10, fontSize: 18, textTransform: 'uppercase' },
				boxContent: {
					paddingBottom: 10,
					lineHeight: 1.5,
					minHeight: 137,
					maxHeight: 137,
					textOverflow: 'ellipsis',
				},
				boxBottom: { paddingTop: 10, fontWeight: 'bold' },
			}));
			var M = Object(k.c)(
					Object(s.c)(
						function (e) {
							return {};
						},
						function (e) {
							return Object(l.b)({}, e);
						},
					)((e) => {
						const t = L();
						return Object(H.jsxs)('div', {
							className: t.root,
							children: [
								Object(H.jsxs)('div', {
									className: t.area,
									style: { flexDirection: 'column' },
									children: [
										Object(H.jsx)('div', {
											style: { padding: 20, paddingBottom: 40, fontSize: 32, fontWeight: 'bold' },
											children: 'Träna med en dans-PT',
										}),
										Object(H.jsx)('div', {
											style: { maxWidth: 500, textAlign: 'center', paddingBottom: 20, lineHeight: 1.5 },
											children:
												'Personlig dansläraren tar fram danssteg och program som är utformade för dig, samtidigt som du får stöd och motivation längs vägen. Du kommer nå nya nivåer och mål efter ditt behov.',
										}),
										Object(H.jsx)('div', {
											style: { padding: 20 },
											children: Object(H.jsx)(R.a, {
												variant: 'contained',
												disableRipple: !0,
												sx: {
													textTransform: 'uppercase',
													backgroundColor: B,
													width: 350,
													height: 70,
													fontSize: 20,
												},
												children: 'Boka privatlektioner',
											}),
										}),
									],
								}),
								Object(H.jsxs)('div', {
									className: t.area,
									style: { flexDirection: 'column', paddingBottom: 50 },
									children: [
										Object(H.jsx)('div', {
											style: { width: '100%', marginTop: 70 },
											children: 'VI ERBJUDER PRIVATLEKTIONER INOM BLAND ANNAT...',
										}),
										Object(H.jsxs)('div', {
											style: {
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
												width: '100%',
												marginTop: 20,
											},
											children: [
												Object(H.jsxs)('div', {
													className: t.middleBox,
													children: [
														Object(H.jsx)('div', { className: t.boxTitle, children: 'Tävlingsdans' }),
														Object(H.jsxs)('div', {
															className: t.boxContent,
															children: [
																'Låt dig guidas av våra danslärare mot en trygg och glädjefylld framtid på tävlingsgolvet.',
																Object(H.jsx)('br', {}),
																Object(H.jsx)('br', {}),
																'Vi lär dig bli bäst inför tävling!',
															],
														}),
														Object(H.jsx)('div', { className: t.boxBottom, children: 'Läs mer >>' }),
													],
												}),
												Object(H.jsxs)('div', {
													className: t.middleBox,
													children: [
														Object(H.jsx)('div', { className: t.boxTitle, children: 'Bröllopsdans' }),
														Object(H.jsxs)('div', {
															className: t.boxContent,
															children: [
																'Dags för bröllop och stunden då ni som äkta makar ska framföra er bröllopsdans? Vi lär er de rätta stegen!',
																Object(H.jsx)('br', {}),
																Object(H.jsx)('br', {}),
															],
														}),
														Object(H.jsx)('div', { className: t.boxBottom, children: 'Läs mer >>' }),
													],
												}),
												Object(H.jsxs)('div', {
													className: t.middleBox,
													children: [
														Object(H.jsx)('div', { className: t.boxTitle, children: 'pro-am' }),
														Object(H.jsxs)('div', {
															className: t.boxContent,
															children: [
																'Pro/Am är för dig som vill dansa tillsammans med en professionell dansare. Här hittar du din danspartner, coach och koreograf.',
																Object(H.jsx)('br', {}),
																Object(H.jsx)('br', {}),
																'Let’s dance!',
															],
														}),
														Object(H.jsx)('div', { className: t.boxBottom, children: 'Läs mer >>' }),
													],
												}),
											],
										}),
									],
								}),
								Object(H.jsxs)('div', {
									className: t.area,
									style: { justifyContent: 'space-between' },
									children: [
										Object(H.jsx)('div', { style: { flex: 0.4, height: 220, backgroundColor: P } }),
										Object(H.jsxs)('div', {
											style: { flex: 0.45, display: 'flex', flexDirection: 'column' },
											children: [
												Object(H.jsx)('div', {
													style: {
														textTransform: 'uppercase',
														fontSize: 30,
														fontWeight: 'bold',
														paddingBottom: 30,
													},
													children: 'Paketerbjudanden',
												}),
												Object(H.jsx)('div', {
													style: { lineHeight: 1.3 },
													children:
														'Vi på Sinclairs ger dig möjligheten att boka paket med 5, 10 eller 20 privatlektioner. Detta ger dig som kund ett bättre pris per tillfälle, och möjliggör även för dig och din lärare att lägga upp en bättre plan för att nå maximalt resultat. Ska det kanske även stå något om att kunna använda paketet i både solo, duo och grupp eller något liknande?',
												}),
												Object(H.jsx)('div', {
													style: { marginTop: 30 },
													children: Object(H.jsx)(R.a, {
														variant: 'contained',
														disableRipple: !0,
														sx: {
															textTransform: 'uppercase',
															backgroundColor: E,
															width: 250,
															height: 45,
															fontSize: 20,
															color: I,
														},
														children: 'Se priser',
													}),
												}),
											],
										}),
									],
								}),
							],
						});
					}),
				),
				W = o(629),
				q = o(248),
				U = o(632);
			function V(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var o = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
						if (null == o) return;
						var r,
							i,
							n = [],
							a = !0,
							s = !1;
						try {
							for (o = o.call(e); !(a = (r = o.next()).done) && (n.push(r.value), !t || n.length !== t); a = !0);
						} catch (e) {
							(s = !0), (i = e);
						} finally {
							try {
								a || null == o.return || o.return();
							} finally {
								if (s) throw i;
							}
						}
						return n;
					})(e, t) ||
					(function (e, t) {
						if (!e) return;
						if ('string' == typeof e) return F(e, t);
						var o = Object.prototype.toString.call(e).slice(8, -1);
						'Object' === o && e.constructor && (o = e.constructor.name);
						if ('Map' === o || 'Set' === o) return Array.from(e);
						if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return F(e, t);
					})(e, t) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						);
					})()
				);
			}
			function F(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
				return r;
			}
			const G = Object(W.a)(R.a)({
					boxShadow: 'none',
					textTransform: 'none',
					fontSize: 16,
					padding: '6px 12px',
					border: '1px solid',
					lineHeight: 1.5,
					backgroundColor: T,
					borderColor: T,
					color: I + ' !important',
					fontFamily: [
						'-apple-system',
						'BlinkMacSystemFont',
						'"Segoe UI"',
						'Roboto',
						'"Helvetica Neue"',
						'Arial',
						'sans-serif',
						'"Apple Color Emoji"',
						'"Segoe UI Emoji"',
						'"Segoe UI Symbol"',
					].join(','),
					'&:hover': {},
					'&:active': {},
					'&:focus': {},
				}),
				J = Object(D.a)(() => ({
					root: {
						background: '#fff',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
					},
					mainContent: {
						width: '80vw',
						background: 'repeating-linear-gradient(-90deg, #fff5f5 0px 60px, transparent 60px 70px)',
						paddingTop: 20,
					},
					header: {
						height: 102,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingBottom: 50,
					},
					logo: { position: 'relative', minWidth: 250, maxWidth: 250, minHeight: 102, maxHeight: 102 },
					square: { width: 17, height: 17, float: 'right', display: 'block' },
					footer: {
						minHeight: '10vh',
						width: '100vw',
						background: I,
						color: A,
						display: 'flex',
						justifyContent: 'center',
						marginTop: 20,
					},
					headerMenu: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '40vw' },
					menuItem: { textTransform: 'uppercase !important', paddingBottom: '5px !important' },
					menuActive: {
						color: N + ' !important',
						borderBottom: `2px solid ${N} !important`,
						paddingBottom: '3px !important',
					},
				})),
				_ = Object(q.a)({ props: { MuiButtonBase: { disableRipple: !0 } } });
			var K = Object(k.c)(
					Object(s.c)(
						function (e) {
							return {};
						},
						function (e) {
							return Object(l.b)({}, e);
						},
					)((e) => {
						const t = J(),
							o = V(Object(r.useState)('home'), 2),
							i = o[0],
							n = o[1];
						return Object(H.jsx)(U.a, {
							theme: _,
							children: Object(H.jsxs)('div', {
								className: t.root,
								children: [
									Object(H.jsxs)('div', {
										className: t.mainContent,
										children: [
											Object(H.jsxs)('div', {
												className: t.header,
												children: [
													Object(H.jsxs)('div', {
														className: t.logo,
														children: [
															Object(H.jsx)('img', {
																style: { position: 'absolute' },
																src: './images/Logo-sinclairs.jpg',
															}),
															Object(H.jsxs)('div', {
																style: { position: 'absolute', right: 0, width: 51 },
																children: [
																	Object(H.jsx)('div', {
																		className: t.square,
																		style: { background: T },
																	}),
																	Object(H.jsx)('div', {
																		className: t.square,
																		style: { background: N },
																	}),
																	Object(H.jsx)('div', {
																		className: t.square,
																		style: { background: S },
																	}),
																	Object(H.jsx)('div', {
																		className: t.square,
																		style: { background: z },
																	}),
																],
															}),
															Object(H.jsx)('div', {
																style: {
																	position: 'absolute',
																	width: '100%',
																	textAlign: 'center',
																	bottom: 17,
																	fontSize: 12,
																	paddingLeft: 25,
																},
																children: 'PRIVATLEKTIONER',
															}),
														],
													}),
													Object(H.jsxs)('div', {
														className: t.headerMenu,
														children: [
															Object(H.jsx)('div', {
																children: Object(H.jsx)(G, {
																	disableRipple: !0,
																	variant: 'text',
																	onClick: () => n('home'),
																	className: Object(C.a)(t.menuItem, { [t.menuActive]: 'home' === i }),
																	children: 'Start',
																}),
															}),
															Object(H.jsx)('div', {
																children: Object(H.jsx)(G, {
																	disableRipple: !0,
																	variant: 'text',
																	onClick: () => n('book'),
																	className: Object(C.a)(t.menuItem, { [t.menuActive]: 'book' === i }),
																	children: 'Boka',
																}),
															}),
															Object(H.jsx)('div', {
																children: Object(H.jsx)(G, {
																	disableRipple: !0,
																	variant: 'text',
																	onClick: () => n('price'),
																	className: Object(C.a)(t.menuItem, {
																		[t.menuActive]: 'price' === i,
																	}),
																	children: 'Priser',
																}),
															}),
															Object(H.jsx)('div', {
																children: Object(H.jsx)(G, {
																	disableRipple: !0,
																	variant: 'text',
																	onClick: () => n('login'),
																	className: Object(C.a)(t.menuItem, {
																		[t.menuActive]: 'login' === i,
																	}),
																	children: 'Login / Mina sidor',
																}),
															}),
														],
													}),
												],
											}),
											(() => {
												switch (i) {
													case 'home':
														return Object(H.jsx)(M, {});
													default:
														return !1;
												}
											})(),
										],
									}),
									Object(H.jsx)('div', { className: t.footer, children: 'Footer' }),
								],
							}),
						});
					}),
				),
				$ = o(91);
			function* Q() {}
			function* X() {
				yield Object($.b)('@@router/LOCATION_CHANGE', Q);
			}
			var Y = function* () {
				yield Object($.a)([X()]);
			};
			class Z extends i.a.Component {
				constructor(e) {
					super(e), (this.state = { error: !1, errorInfo: null });
				}
				componentDidCatch(e, t) {
					this.setState({ error: e, errorInfo: t });
				}
				render() {
					return this.state.hasError
						? Object(H.jsxs)('div', {
								children: [
									Object(H.jsx)('h2', { children: 'Something went wrong.' }),
									Object(H.jsxs)('details', {
										style: { whiteSpace: 'pre-wrap' },
										children: [
											this.state.error && this.state.error.toString(),
											Object(H.jsx)('br', {}),
											this.state.errorInfo.componentStack,
										],
									}),
								],
						  })
						: this.props.children;
				}
			}
			var ee = Z;
			o(244);
			const te = Object(b.a)(),
				oe = Object(d.a)(te),
				re = Object(c.a)();
			let ie;
			ie = Object(l.a)(re, oe)(l.d)(w(te));
			re.run(Y),
				a.a.render(
					Object(H.jsx)(ee, {
						children: Object(H.jsx)(s.a, {
							store: ie,
							children: Object(H.jsx)(p.a, { history: te, children: Object(H.jsx)(K, {}) }),
						}),
					}),
					document.querySelector('#root'),
				);
		},
	},
	[[256, 1, 2]],
]);
