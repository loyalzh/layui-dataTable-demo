layui.use('table', function () {
    var table = layui.table;
    table.render({
        elem: '#leaveTable',
        height:'full-180',
        url: '/V_YCJK/GetLiXian',
        cellMinWidth: 80 
            ,
        cols: [
            [{
                    field: 'id',
                    width: 60,
                    fixed:'left',
                    title: '序号',
                }, {
                    field: 'username',
                    width: 175,
                    title: '离线开始时间'
                }, {
                    field: 'sex',
                    width: 175,
                    title: '离线时长',
                    
                }, {
                    field: 'city',
                    width: 315,
                    title: '所属泵房'
                }, {
                    field: 'sign',
                    title: '类型',
                    width: 155,
                    // minWidth: 100
                } //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
                , {
                    field: 'experience',
                    width:300,
                    title: '分区',
                }, {
                    field:'score',
                    width:165,
                    title: '操作',
                    fixed: 'right',
                    align: 'center',
                    toolbar: '#barDemo'
                }
            ]
             
        ],
        page: true
    });
    table.on('tool(demo)', function (obj) {
        var data = obj.data 
            , layEvent = obj.event; 
        if (layEvent === 'detail') {
            layer.msg('查看操作');
        } else if (layEvent === 'del') {
            layer.confirm('真的删除行么', function (index) {
                obj.del(); 
                layer.close(index);
                
            });
        } else if (layEvent === 'edit') {
            layer.msg('编辑操作');
        }
    });
});