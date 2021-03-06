$(function() {
	/*标准*/
	setInterval('fun2()', 600000);
	fun1()
})

function fun1() {
	$.ajax({
		url: "https://www.biaoruan.wang/wts/bigScreen/orderDataStatistic",
		success: function(res) {
			console.log(res);
			var data1 = res.data.orgOnlineNumTop5ProvinceBar; //第一组数据
			var data2 = res.data.orgTodayUploadDataRankingBar; //第二组数据orgTodayUploadDataRankingBar 机构当日上传
			var data3 = res.data.orgUploadTotalDataRankingBar; //orgUploadTotalDataRankingBar 这个是机构上传的总量
			var data4 = res.data.uploadDataMonthLine;
			var data5 = res.data.orgOnlineNumTop5ProvinceBar;
			var data6 = res.data.platformOrderPriceBar;
			var order = res.data.orderList;
			console.log(order)
			for (var i in order) {
				console.log(order[i].paymentTime)
				var str = "";
				str += "<div class=''times'>" + order[i].paymentTime + "</div>"
				str += "<div class='wrap' id='sh'>"
				str += "<div class='left'><img src='assets/img/logo.png'></div>"
				str += "<div class=''right'>"
				str += "<span>" + order[i].patientName + "</span>"
				str += "<span>" + order[i].paymentTime+"</span>"
				str+="下单购买了<span>"+ order[i].examSuiteName+"</span>套餐"
				str += "</div>"
				str += "</div>"
			}
            $(".move").html(str)
			$("#orgNumber").html(res.data.orgNumber);
			$("#reristernum").html(res.data.userRegisterNumber);
			$("#reportQueryNumber").html(res.data.orderNum7);
			$("#reportQueryTotalNumber").html(res.data.orderTotalPrice);
			$(".todayOrderNum").html(res.data.todayOrderNum);
			$(".todayOrderPrice").html(res.data.todayOrderPrice)
			/* 飞鸟尽*/
			var graduateyear = echarts.init(document.getElementById('graduateyear'));
			option = {
				title: {
					text: "",
					x: 'center',
					y: 'top',
					textStyle: {
						color: '#fff',
						fontSize: 13
					}
				},
				toolbox: {
					feature: {
						dataView: {
							show: true,
							readOnly: false
						},
						magicType: {
							show: true,
							type: ['line', 'bar']
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
				tooltip: {
					trigger: 'axis'
				},
				grid: {
					left: '3%',
					right: '8%',
					bottom: '5%',
					top: "13%",
					containLabel: true
				},
				color: ["#72b332", '#35a9e0'],
				legend: {
					data: ['test1', 'test2'],
					show: true,

					right: '15%',
					y: "0",
					textStyle: {
						color: "#999",
						fontSize: '13'
					},
				},
				toolbox: {
					show: false,
					feature: {
						mark: {
							show: true
						},
						dataView: {
							show: true,
							readOnly: false
						},
						magicType: {
							show: true,
							type: ['line', 'bar', 'stack', 'tiled']
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
				calculable: true,
				xAxis: [{
					type: 'category',
					boundaryGap: false,
					data: data4.category,
					splitLine: {
						show: true,
						lineStyle: {
							color: '#2d3b53'
						}
					},
					axisLabel: {
						textStyle: {
							color: "#fff"
						},
						alignWithLabel: true,
						interval: 0,
						rotate: '30'
					}
				}],
				yAxis: [{
					type: 'value',
					splitLine: {
						show: true,
						lineStyle: {
							color: '#2d3b53'
						}
					},
					axisLabel: {
						textStyle: {
							color: "#999"
						}
					},
				}],
				series: [{
					data: data4.value,
					type: 'line',
					smooth: true,
					name: '数量',
				}]
			};
			graduateyear.setOption(option);




			/*  =====-=*/
			var courserate = echarts.init(document.getElementById('courserate'));
			option = {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'center',
					right: '0',
					y: 'middle',
					textStyle: {
						color: "#fff"
					},

					formatter: function(name) {
						var oa = option.series[0].data;
						var num = oa[0].value + oa[1].value + oa[2].value;
						for (var i = 0; i < option.series[0].data.length; i++) {
							if (name == oa[i].name) {
								return name + ' ' + oa[i].value;
							}
						}
					},
					data: ['医院', '医院x', '医院xxx']
				},
				series: [{
					name: '收入来源',
					type: 'pie',
					radius: '50%',
					color: ['#27c2c1', '#9ccb63', '#fcd85a'],
					center: ['50%', '50%'],
					data: [{
							value: 335,
							name: '医院'
						},
						{
							value: 310,
							name: '医院x'
						},
						{
							value: 234,
							name: '医院xxx'
						}

					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					itemStyle: {
						normal: {
							label: {
								show: true,
								position: 'outside',
								formatter: '{b}'
							}
						},
						labelLine: {
							show: true
						}
					}
				}]
			};

			courserate.setOption(option);
			// zhuzhuangtu
			var dom = document.getElementById("courserateone");
			var myChart = echarts.init(dom);
			var app = {};
			option = null;
			option = {

				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				xAxis: {
					type: 'category',
					data: data5.category,
					axisLabel: {
						textStyle: {
							color: "#fff"
						},
						lineStyle: {
							color: '#519cff'
						},
						rotate: '30'

					}
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						textStyle: {
							color: "#fff"
						},
						lineStyle: {
							color: '#519cff'
						},

					}
				},
				grid: {
					top: '18%',
					right: '5%',
					bottom: '8%',
					left: '5%',
					containLabel: true
				},
				series: [{
					data: data5.value,
					type: 'bar',
					name: '数量',
					barWidth: 10,
					showBackground: true,
					backgroundStyle: {
						color: 'orange'
					}
				}]
			};;
			if (option && typeof option === "object") {
				myChart.setOption(option, true);
			}

			// zhuzhuangtu

			var dom = document.getElementById("container");
			var myChart = echarts.init(dom);
			var app = {};
			option = null;
			option = {
				color: ['#3398DB'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: '5%',
					right: '5%',
					bottom: '0%',
					top: "17%",
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: data1.category,
					axisTick: {
						alignWithLabel: true
					},
					axisLabel: {
						textStyle: {
							color: "#fff"
						},
						lineStyle: {
							color: '#519cff'
						},
						rotate: '30'

					}
				}],
				yAxis: [{
						type: 'value',
						axisLabel: {
							textStyle: {
								color: "#fff"
							},
							lineStyle: {
								color: '#519cff'
							},

						}
					},

				],
				series: [{
					name: '数量',
					type: 'bar',
					barWidth: '15%',
					data: data1.value
				}]
			};;
			if (option && typeof option === "object") {
				myChart.setOption(option, true);
			}

			// 比列变化

			var changedetail = echarts.init(document.getElementById('changedetail'));
			option = {
				tooltip: {
					trigger: 'axis',
					formatter: '{b}</br>{a}: {c}</br>'
				},
				toolbox: {
					show: false,
					feature: {
						dataView: {
							show: true,
							readOnly: false
						},
						magicType: {
							show: true,
							type: ['line', 'bar']
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
				legend: {
					data: ['', ''],
					show: false
				},
				grid: {
					top: '18%',
					right: '5%',
					left: '5%',
					bottom: '5%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: ['2021年', '2022年', '2023年', '2024年', '2025年'],
					splitLine: {
						show: false,
						lineStyle: {
							color: '#3c4452'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: "#fff"
						},
						lineStyle: {
							color: '#519cff'
						},
						alignWithLabel: true,
						interval: 0,
						rotate: '30'
					}
				}],
				yAxis: [{



						axisLine: {
							show: false,
							lineStyle: {
								color: '#115372'
							}
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							textStyle: {
								color: "#fff"
							},
							alignWithLabel: true,
							interval: 0

						}
					},
					{



					}
				],
				color: "yellow",
				series: [


					{
						name: '数量',
						type: 'bar',
						barWidth: "15%",
						lineStyle: {
							normal: {
								color: '#c39705'
							}
						},
						data: [40, 0.5, 0.8, 0.9, 0.6],

					}
				]
			};
			changedetail.setOption(option);

			/* ===*/
			var edubalance = echarts.init(document.getElementById('edubalance'));
			option = {
				tooltip: {
					trigger: 'axis',
					formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>'
				},
				toolbox: {
					show: false,

				},
				legend: {
					data: data6.legend,
					right: "0%",
					textStyle: {
						color: '#fff'
					}
				},
				grid: {
					top: '18%',
					right: '5%',
					bottom: '8%',
					left: '5%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: data6.category,
					splitLine: {
						show: false,
						lineStyle: {
							color: '#3c4452'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: "#fff"
						},
						lineStyle: {
							color: '#519cff'
						},
						rotate: '30'
					}
				}],
				yAxis: [{
					type: 'value',

					nameTextStyle: {
						color: '#fff'
					},

					splitLine: {
						show: true,
						lineStyle: {
							color: '#23303f'
						}
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#115372'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: "#fff"
						},
						alignWithLabel: true,
						interval: 0

					}
				}, ],
				color: "yellow",
				series: [{
						name: data6.series[0].name,
						type: 'bar',
						data: data6.series[0].data,
						itemStyle: {
							normal: {
								color: '#76da91'
							},
							label: {
								show: true,
								position: 'top',
								formatter: '{c}'
							}
						}
					},
					{
						name: data6.series[1].name,
						type: 'bar',
						data: data6.series[1].data,
						itemStyle: {
							normal: {
								color: '#f8cb7f'
							},
							label: {
								show: true,
								position: 'top',
								formatter: '{c}'
							}
						}
					},
					{
						name: data6.series[2].name,
						type: 'bar',
						data: data6.series[2].data,
						itemStyle: {
							normal: {
								color: '#f89588'
							},
							label: {
								show: true,
								position: 'top',
								formatter: '{c}'

							}
						}
					},


				]
			};
			edubalance.setOption(option);

		},
	})
}
