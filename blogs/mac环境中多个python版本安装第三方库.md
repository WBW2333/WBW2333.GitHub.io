# mac环境中多个python版本安装第三方库

因为我的mac上安装了多个版本的第三方库，而在pycharm中一直使用的环境是内置的python3.8版本，但是命令行中使用python3 -m pip安装的时候会默认安装到后来装的python3.9包里，因此需要指明python3.8的位置。

但是因为mac里面在/usr/bin/python3位置保存的是python3.8的一个可执行文件供pycharm调用环境，因此无法使用--target参数安装第三方库到python3.8，因此需要使用/usr/bin/python3 -m pip install安装第三方库。