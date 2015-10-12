module.exports = function(grunt){

    require('load-grunt-tasks')(grunt); //�������е�����
    //require('time-grunt')(grunt); ���Ҫʹ�� time-grunt ���

    grunt.initConfig({
        connect: {
            options: {
                port: 9000,
                hostname: '*', //Ĭ�Ͼ������ֵ��������Ϊ����ĳ�� IP��localhost ������
                livereload: 35729  //������ watch �����Ķ˿�
            },

            server: {
                options: {
                    open: true, //�Զ�����ҳ http://
                    base: [
                        ''  //��Ŀ¼
                    ]
                }
            }
        },

        watch: {
            livereload: {
                options: {
                    livereload: '<%=connect.options.livereload%>'  //����ǰ�������Ķ˿�  35729
                },

                files: [  //�����ļ��ĸı�ͻ�ʵʱˢ����ҳ
                    '/*.html',
                    '/css/{,*/}*.css',
                    '/js/{,*/}*.js',
                    '/images/{,*/}*.{png,jpg}',
                    '/html/*.html'
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);
};