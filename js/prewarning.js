layui.use('table', function () {
    var table = layui.table;
    table.render({
        elem: '#prewarningTable',
        height: 'full-180',
        url: '/demo/table/user/',
        cellMinWidth: 80,
        cols: [
            [{
                field: 'id',
                width: 60,
                fixed: 'left',
                title: '序号',
            }, {
                field: 'username',
                width: 200,
                title: '预警开始时间'
            }, {
                field: 'sex',
                width: 115,
                title: '预警时长',

            }, {
                field: 'sign',
                title: '所属泵房',
                width: 200,

            }, {
                field: 'experience',
                width: 95,
                title: '类型',
            }, {
                field: 'score',
                width: 105,
                title: '分区',
            }, {
                field: 'score',
                width: 110,
                title: '预警类型',
            }, {
                field: 'score',
                width: 245,
                title: '预警类容',
            }, {
                field: 'score',
                width: 260,
                title: '操作',
                fixed: 'right',
                align: 'center',
                toolbar: '#barDemo'
            }]
        ],
        page: true

    });
    table.on('tool(demo)', function (obj) {
        var data = obj.data,
            layEvent = obj.event;
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