app.controller("UserDashboardController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {

      //  $scope.ToDateBooking = new Date();
        $scope.TotalBooking = '100 K';
        $scope.ToDateBooking = $filter('date')(new Date().toJSON().slice(0, 10), 'MMM dd, yyyy');
    }


    var options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            },

            dropShadow: {
                enabled: true,
                top: 0,
                left: 5,
                bottom: 5,
                right: 0,
                blur: 5,
                color: '#b6c2e4',
                opacity: 0.35
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ["#5766da", "#1ecab8", "#fbb624"],
        series: [{
            name: 'Power Consumption',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }

            //,
            //{
            //    name: 'Posted Ticket',
            //    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            //},

            //{
            //name: 'Free Cash Flow',
            //data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            //}
        ],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: '#bec7e0',
            },
            axisTicks: {
                show: true,
                color: '#bec7e0',
            },
        },
        legend: {
            offsetY: -10,
        },
        yaxis: {
            title: {
                text: 'Power Consumption Timeline'
            }
        },
        fill: {
            opacity: 1

        },
        // legend: {
        //     floating: true
        // },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f3fa'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Watts "
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex_column1"),
        options
    );

    chart.render();


    /// Tickets ----Bar charts


    var options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            },

            dropShadow: {
                enabled: true,
                top: 0,
                left: 5,
                bottom: 5,
                right: 0,
                blur: 5,
                color: '#b6c2e4',
                opacity: 0.35
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
        },
        colors: ["#5766da", "#1ecab8", "#fbb624"],
        series: [{
            name: 'Open Ticket',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66,77,88,99]
        }
         ,
         {
           name: 'Pandding Ticket',
             data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 77, 88, 99]
         },
         {
           name: 'ReSolved Ticket',
             data: [81, 72, 60, 70, 86, 75, 30, 50, 74, 22, 33, 44]
         },

            //{
            //name: 'Free Cash Flow',
            //data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            //}
        ],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: '#bec7e0',
            },
            axisTicks: {
                show: true,
                color: '#bec7e0',
            },
        },
        legend: {
            offsetY: -10,
        },
        yaxis: {
            title: {
                text: 'Total Tickets '
            }
        },
        fill: {
            opacity: 1

        },
        // legend: {
        //     floating: true
        // },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f3fa'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Tickets "
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#UserTicketsChart"),
        options
    );

    chart.render();



    //// Booking 

    var options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            },

            dropShadow: {
                enabled: true,
                top: 0,
                left: 5,
                bottom: 5,
                right: 0,
                blur: 5,
                color: '#b6c2e4',
                opacity: 0.35
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '40%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
        },
        colors: ["#5766da", "#1ecab8"],
        series: [{
            name: 'Booking ',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 77, 88, 99]
        }
            ,
        {
            name: 'Booking Cacelled',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 77, 88, 99]
        },

            //{
            //name: 'Free Cash Flow',
            //data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            //}
        ],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: '#bec7e0',
            },
            axisTicks: {
                show: true,
                color: '#bec7e0',
            },
        },
        legend: {
            offsetY: -10,
        },
        yaxis: {
            title: {
                text: 'Total Booking '
            }
        },
        fill: {
            opacity: 1

        },
        // legend: {
        //     floating: true
        // },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f3fa'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Booking "
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#UserBookingChart"),
        options
    );

    chart.render();

    /// Line Chart


    //var options = {
    //    chart: {
    //        height: 374,

    //        type: 'line',

    //        dropShadow: {
    //            enabled: true,
    //            top: 10,
    //            left: 0,
    //            bottom: 0,
    //            right: 0,
    //            blur: 2,
    //            color: '#b6c2e4',
    //            opacity: 0.35
    //        },
    //    },
    //    stroke: {
    //        width: 5,
    //        curve: 'smooth'
    //    },
    //    series: [{
    //        name: 'Likes',
    //        data: [4, 3, 10, 9, 29, 19, 22, 28, 12, 15, 19, 30]
    //    }],
    //    xaxis: {
    //        //min: new Date("01/20/2014").getTime(),
    //        //max: new Date("01/20/2022").getTime(),

    //        type: 'datetime',

    //        // , '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'
    //        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //        axisBorder: {
    //            show: true,
    //            color: '#bec7e0',
    //        },
    //        axisTicks: {
    //            show: true,
    //            color: '#bec7e0',
    //        },
    //    },
    //    title: {
    //        text: 'Power Consumption Timeline',
    //        align: 'left',
    //        style: {
    //            fontSize: "16px",
    //            color: '#666'
    //        }
    //    },
    //    fill: {
    //        type: 'gradient',
    //        gradient: {
    //            shade: 'dark',
    //            gradientToColors: ['#43cea2'],
    //            shadeIntensity: 1,
    //            type: 'horizontal',
    //            opacityFrom: 1,
    //            opacityTo: 1,
    //            stops: [0, 100, 100, 100]
    //        },
    //    },
    //    markers: {
    //        size: 8,
    //        opacity: 0.9,
    //        colors: ["#ffbc00"],
    //        strokeColor: "#fff",
    //        strokeWidth: 2,
    //        style: 'inverted', // full, hollow, inverted
    //        hover: {
    //            size: 7,
    //        }
    //    },
    //    yaxis: {
    //        min: -10,
    //        max: 40,
    //        floating: true,
    //        title: {
    //            text: 'Engagement',
    //        },
    //    },
    //    grid: {
    //        row: {
    //            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
    //            opacity: 0.2,

    //        },
    //        borderColor: '#185a9d'
    //    },
    //    responsive: [{
    //        breakpoint: 600,
    //        options: {
    //            chart: {
    //                toolbar: {
    //                    show: false
    //                }
    //            },
    //            legend: {
    //                show: false
    //            },
    //        }
    //    }]
    //}

    //var chart = new ApexCharts(
    //    document.querySelector("#powerConsumptionTimeline"),
    //    options
    //);

    //chart.render();

});