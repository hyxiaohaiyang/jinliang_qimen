

function ding_shenming_gong(c){
	var yinli = c.lunar()
	var yue = yinli.lunarMonth
	if (yue  < 0) {yue = Math.abs(yue) + 1}
	var shi = cylce(c.hGz(),12)
	var a = new Array(2) 
	a[0] = cycle(cycle(3 + yue,12) - shi,12) //minggong
	a[1] = cycle(cycle(3 + yue,12) + shi,12) //shengong
	return a
}

function bu_shier_gong(c,gong,shen){
	var shenming = ding_shenming_gong(c)
	var ming = shenming[0]
	shen = shenming[1]
	for(var i = 1; i<13; i++){
		gong[cycle(ming-i+1,12)] = shiergong[i] 
	}
}

function get_wuxingju(c,shenming){	
	var m = shenming[0]
	var ju = new Array(2)
	var c_zhengyue = new CCC(c.year(),2,15)
	var zhengyue_ganzhi = c_zhengyue.mGz()
	var minggong_huajia = huajia[cycle(zhengyue_ganzhi + cycle(m-2,12),60)]
	var minggong_nayin = nayin_list[minggong_huajia]
	mingong_nayin = mingong_nayin.substring(2)
	switch(minggong_nayin){

		case "ˮ":
			ju[0] = "ˮ����"
			ju[1] = "2"
			break
		case "ľ":
			ju[0] = "ľ����"
			ju[1] = "3"
			break
		case "��":
			ju[0] = "���ľ�"
			ju[1] = "4"
			break
 		case "��":
			ju[0] = "�����"
			ju[1] = "5"
			break
		case "��":
			ju[0] = "������"
			ju[1] = "1"
			break
		return ju
	}
}


function ding_ziwei_loc(c,ju){//����΢���
	var x,y
	var shengri = c.lunar().lunarDate
	var r = shengri % ju
	if(r == ju){
		y = shengri/ju
	} else{
		x = ju - r
		if(x%2 == 0) {
			y = ((shengri + x)/ju) + x
			y = cycle(y,12)
		} else {
			y = ((shengri + x)/ju) - x
			y = cycle(y,12)			
		}
	}
}

function bu_ziwei_tianfu(ziwei,tianfu,ziwei_loc,tianfu_loc){//����΢���츮

	for(var i=1; i<13; i++){
		ziwei[cycle(ziwei_loc-i+1,12)] = ziwei_xi[i]
		tianfu[cycle(tianfu_loc+i-1,12)] = tianfu_xi[i] 
	}

	for(var i=1; i<13; i++){
		ziwei_tianfu_xi_miaowang(ziwei_loc)
	}

}

function ziwei_tianfu_xi_miaowang(ziwei_loc){ //��΢���츮ϵ����
	switch(cycle(ziwei_loc-i+1,12)) { 
		case 1: 
			ziwei[1] = "��΢��"
			ziwei[12] = "�����"
			ziwei[10] = "̫����"
			ziwei[9] = "������"
			ziwei[8] = "��ͬ��"
			ziwei[5] = "������"

			tianfu[5] = "�츮��"
			tianfu[6] = "̫����"
			tianfu[7] = "̰����"
			tianfu[8] = "���Ų�"
			tianfu[9] = "������"
			tianfu[10] = "������"
			tianfu[11] = "��ɱ��"
			tianfu[3] = "�ƾ���"
			break
		case 2: 
			ziwei[2] = "��΢��"
			ziwei[1] = "�����"
			ziwei[11] = "̫����"
			ziwei[10] = "������"
			ziwei[9] = "��ͬ��"
			ziwei[6] = "������"

			tianfu[4] = "�츮��"
			tianfu[5] = "̫����"
			tianfu[6] = "̰����"
			tianfu[7] = "������"
			tianfu[8] = "�����"
			tianfu[9] = "������"
			tianfu[10] = "��ɱ��"
			tianfu[2] = "�ƾ���"
			break
		case 3: 
			ziwei[3] = "��΢��"
			ziwei[2] = "�����"
			ziwei[12] = "̫����"
			ziwei[11] = "������"
			ziwei[10] = "��ͬ��"
			ziwei[7] = "�����"

			tianfu[3] = "�츮��"
			tianfu[4] = "̫����"
			tianfu[5] = "̰����"
			tianfu[6] = "������"
			tianfu[7] = "������"
			tianfu[8] = "������"
			tianfu[9] = "��ɱ��"
			tianfu[1] = "�ƾ���"
			break
		case 4: 
			ziwei[4] = "��΢��"
			ziwei[3] = "�����"
			ziwei[1] = "̫����"
			ziwei[12] = "������"
			ziwei[11] = "��ͬ��"
			ziwei[8] = "������"

			tianfu[2] = "�츮��"
			tianfu[3] = "̫����"
			tianfu[4] = "̰����"
			tianfu[5] = "������"
			tianfu[6] = "�����"
			tianfu[7] = "������"
			tianfu[8] = "��ɱ��"
			tianfu[12] = "�ƾ���"
			break
		case 5: 
			ziwei[5] = "��΢��"
			ziwei[4] = "�����"
			ziwei[2] = "̫����"
			ziwei[1] = "������"
			ziwei[12] = "��ͬ��"
			ziwei[9] = "������"


			tianfu[1] = "�츮��"
			tianfu[2] = "̫����"
			tianfu[3] = "̰����"
			tianfu[4] = "������"
			tianfu[5] = "�����"
			tianfu[6] = "������"
			tianfu[7] = "��ɱ��"
			tianfu[11] = "�ƾ���"
			break
		case 6: 
			ziwei[6] = "��΢��"
			ziwei[5] = "�����"
			ziwei[3] = "̫����"
			ziwei[2] = "������"
			ziwei[1] = "��ͬ��"
			ziwei[10] = "�����"

			tianfu[12] = "�츮��"
			tianfu[1] = "̫����"
			tianfu[2] = "̰����"
			tianfu[3] = "������"
			tianfu[4] = "������"
			tianfu[5] = "������"
			tianfu[6] = "��ɱ��"
			tianfu[10] = "�ƾ���"
			break
		case 7: 
			ziwei[7] = "��΢��"
			ziwei[6] = "�����"
			ziwei[4] = "̫����"
			ziwei[3] = "������"
			ziwei[2] = "��ͬ��"
			ziwei[11] = "������"


			tianfu[11] = "�츮��"
			tianfu[12] = "̫����"
			tianfu[1] = "̰����"
			tianfu[2] = "���Ų�"
			tianfu[3] = "������"
			tianfu[4] = "������"
			tianfu[5] = "��ɱ��"
			tianfu[9] = "�ƾ���"
			break
		case 8: 
			ziwei[8] = "��΢��"
			ziwei[7] = "�����"
			ziwei[5] = "̫����"
			ziwei[4] = "������"
			ziwei[3] = "��ͬ��"
			ziwei[12] = "������"


			tianfu[10] = "�츮��"
			tianfu[11] = "̫����"
			tianfu[12] = "̰����"
			tianfu[1] = "������"
			tianfu[2] = "�����"
			tianfu[3] = "������"
			tianfu[4] = "��ɱ��"
			tianfu[8] = "�ƾ���"
			break
		case 9: 
			ziwei[9] = "��΢��"
			ziwei[8] = "�����"
			ziwei[6] = "̫����"
			ziwei[5] = "������"
			ziwei[4] = "��ͬ��"
			ziwei[1] = "�����"

			tianfu[9] = "�츮��"
			tianfu[10] = "̫����"
			tianfu[11] = "̰����"
			tianfu[12] = "������"
			tianfu[1] = "������"
			tianfu[2] = "������"
			tianfu[3] = "��ɱ��"
			tianfu[7] = "�ƾ���"
			break
		case 10: 
			ziwei[10] = "��΢��"
			ziwei[9] = "�����"
			ziwei[7] = "̫����"
			ziwei[6] = "������"
			ziwei[5] = "��ͬ��"
			ziwei[2] = "������"

			tianfu[8] = "�츮��"
			tianfu[9] = "̫����"
			tianfu[10] = "̰����"
			tianfu[11] = "������"
			tianfu[12] = "�����"
			tianfu[1] = "������"
			tianfu[2] = "��ɱ��"
			tianfu[6] = "�ƾ���"
			break
		case 11: 
			ziwei[11] = "��΢��"
			ziwei[10] = "�����"
			ziwei[8] = "̫����"
			ziwei[7] = "������"
			ziwei[6] = "��ͬ��"
			ziwei[3] = "������"


			tianfu[7] = "�츮��"
			tianfu[8] = "̫����"
			tianfu[9] = "̰�Ǻ�"
			tianfu[10] = "���ŵ�"
			tianfu[11] = "�����"
			tianfu[12] = "������"
			tianfu[1] = "��ɱ��"
			tianfu[5] = "�ƾ���"
			break
		case 12: 
			ziwei[12] = "��΢��"
			ziwei[11] = "�����"
			ziwei[9] = "̫����"
			ziwei[8] = "������"
			ziwei[7] = "��ͬ��"
			ziwei[4] = "������"

			tianfu[6] = "�츮��"
			tianfu[7] = "̫����"
			tianfu[8] = "̰����"
			tianfu[9] = "������"
			tianfu[10] = "������"
			tianfu[11] = "������"
			tianfu[12] = "��ɱ��"
			tianfu[4] = "�ƾ���"
			break
	}
}

function ding_tianfu_loc(ziwei_loc){//���츮���
	return cycle(5 - ziwei_loc + 1,12)

}

function bu_tianfu(tianfu,tianfu_loc){//���츮	
	for(var i=1; i<13; i++){
		tianfu[cycle(tianfu_loc+i-1,12)] = tianfu_xi[i] 
	}
}

function bu_tuo_lu_yang(tuo_lu_yang, jielu,kuiyue, tianguan, tianfu2,niangan){
//���ϵ����»�򡢽�·�����ᡢ��١��츣
	switch(niangan){
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+1,12)] = tuo_lu_yang_xi[i]
			}
			jielu[9] = "��·"

			kuiyue[2] = "�����"
			kuiyue[8] = "������"

			tianguan[8] = "���"
			tianfu2[10] = "�츣"

			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+2,12)] = tuo_lu_yang_xi[i]
			}
			jielu[10] = "��·"


			kuiyue[1] = "�����"
			kuiyue[9] = "������"

			tianguan[5] = "���"
			tianfu2[9] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+4,12)] = tuo_lu_yang_xi[i]
			}
			jielu[7] = "��·"


			kuiyue[12] = "�����"
			kuiyue[10] = "������"

			tianguan[6] = "���"
			tianfu2[1] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+5,12)] = tuo_lu_yang_xi[i]
			}
			jielu[8] = "��·"


			kuiyue[12] = "�����"
			kuiyue[10] = "������"

			tianguan[3] = "���"
			tianfu2[12] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+4,12)] = tuo_lu_yang_xi[i]
			}
			jielu[5] = "��·"


			kuiyue[2] = "�����"
			kuiyue[8] = "������"

			tianguan[4] = "���"
			tianfu2[4] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+5,12)] = tuo_lu_yang_xi[i]
			}
			jielu[6] = "��·"


			kuiyue[1] = "�����"
			kuiyue[9] = "������"

			tianguan[10] = "���"
			tianfu2[3] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+7,12)] = tuo_lu_yang_xi[i]
			}
			jielu[3] = "��·"


			kuiyue[3] = "���"
			kuiyue[7] = "����"

			tianguan[12] = "���"
			tianfu2[7] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+8,12)] = tuo_lu_yang_xi[i]
			}
			jielu[4] = "��·"


			kuiyue[3] = "���"
			kuiyue[7] = "����"

			tianguan[10] = "���"
			tianfu2[6] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+10,12)] = tuo_lu_yang_xi[i]
			}
			jielu[1] = "��·"


			kuiyue[4] = "�����"
			kuiyue[6] = "������"

			tianguan[11] = "���"
			tianfu2[7] = "�츣"
			break
		case "��":
			for(var i=1; i<13; i++) {
				tuo_lu_yang[cycle(i+11,12)] = tuo_lu_yang_xi[i]
			}
			jielu[2] = "��·"


			kuiyue[4] = "�����"
			kuiyue[6] = "������"

			tianguan[7] = "���"
			tianfu2[6] = "�츣"
			break
	}

	tuoluyang_miaowang(tuo_lu_yang)

}

function tuoluyang_miaowang(tly){ //tly --- tuo_lu_yang, the array that holds ���ݡ�»�桢����


	switch(tly.indexOf("����")){
		case 2: 
			tly[2] = "������"
			break
		
		case 3: 
			tly[3] = "������"
			break
		case 5: 
			tly[5] = "������"
			break

		case 6: 
			tly[6] = "������"
			break
		case 8: 
			tly[8] = "������"
			break

		case 9: 
			tly[9] = "������"
			break
		case 11: 
			tly[11] = "������"
			break
		
		case 12: 
			tly[12] = "������"
			break
	}
	switch(tly.indexOf("»��")){
		case 1: 
			tly[1] = "»����"
			break
		
		case 3: 
			tly[3] = "»����"
			break
		case 4: 
			tly[4] = "»����"
			break

		case 6: 
			tly[6] = "»����"
			break
		case 7: 
			tly[7] = "»����"
			break

		case 9: 
			tly[9] = "»����"
			break
		case 10: 
			tly[10] = "»����"
			break
		
		case 12: 
			tly[12] = "»����"
			break
	}

	switch(tly.indexOf("����")){
		case 1: 
			tly[1] = "������"
			break
		
		case 2: 
			tly[2] = "������"
			break
		case 4: 
			tly[4] = "������"
			break

		case 5: 
			tly[5] = "������"
			break
		case 7: 
			tly[7] = "����ƽ"
			break

		case 8: 
			tly[8] = "������"
			break
		case 10: 
			tly[10] = "������"
			break
		
		case 12: 
			tly[12] = "������"
			break
	}
}
function bu_boshi(boshi,tuo_lu_yang,shunni){ //��ʿ��tuo_lu_yang ��»��
	var lucun = locate("»��",tuo_lu_yang)
	if(shunni=="shun"){
		for(var i=1; i<13; i++){
			boshi[cycle(lucun+i-1,12)] = boshi_xi[i]
		}
	} else{
		for(var i=1; i<13; i++){
			boshi[cycle(lucun-i+1,12)] = boshi_xi[i]
		}
	}
}

function bu_shixi_zhuxing(qktf,jiechang,shizhu){//��ʱϵ����
//qktf --- qukongtaifeng �������ؿա�̨�������
//jiechang ---dijie wenchang �ؽ١��Ĳ�
//huoling --- ���ǡ�����
	var shizhi = cycle(shizhu,12)
	for(var i=1; i<13; i++){
		qktf[i] = ""
	}
	switch(shizhi){
		case "��": 
			qktf[5] = "������"
			qktf[12] = "�ؿ���"
			qktf[7] = "̨��"
			qktf[3] = "���"
			jiechang[11] = "�Ĳ���"			
			jiechang[12] = "�ؽ���"
	
			break
		case "��": 
			qktf[6] = "������"
			qktf[11] = "�ؿ���"
			qktf[8] = "̨��"
			qktf[4] = "���"
			jiechang[10] = "�Ĳ���"			
			jiechang[1] = "�ؽ���"

			break
		case "��": 
			qktf[7] = "������"
			qktf[10] = "�ؿ���"
			qktf[9] = "̨��"
			qktf[5] = "���"
			jiechang[9] = "�Ĳ���"			
			jiechang[2] = "�ؽ���"

			break
		case "î": 
			qktf[8] = "������"
			qktf[9] = "�ؿ���"
			qktf[10] = "̨��"
			qktf[6] = "���"
			jiechang[8] = "�Ĳ�ƽ"			
			jiechang[3] = "�ؽ�ƽ"

			break
		case "��": 
			qktf[9] = "����ƽ"
			qktf[8] = "�ؿ�ƽ"
			qktf[11] = "̨��"
			qktf[7] = "���"
			jiechang[7] = "�Ĳ���"			
			jiechang[4] = "�ؽ�ƽ"

			break
		case "��": 
			qktf[10] = "������"
			qktf[7] = "�ؿ���"
			qktf[12] = "̨��"
			qktf[8] = "���"
			jiechang[6] = "�Ĳ���"			
			jiechang[5] = "�ؽ���"

			break
		case "��": 
			qktf[11] = "������"
			qktf[6] = "�ؿ���"
			qktf[1] = "̨��"
			qktf[9] = "���"
			jiechang[5] = "�Ĳ���"			
			jiechang[6] = "�ؽ���"

			break
		case "δ": 
			qktf[12] = "������"
			qktf[5] = "�ؿ���"
			qktf[2] = "̨��"
			qktf[10] = "���"
			jiechang[4] = "�Ĳ�ƽ"			
			jiechang[7] = "�ؽ���"

			break
		case "��": 
			qktf[1] = "������"
			qktf[4] = "�ؿ�ƽ"
			qktf[3] = "̨��"
			qktf[11] = "���"
			qktf[5] = "�ؿ�"
			qktf[2] = "̨��"
			qktf[10] = "���"
			jiechang[3] = "�Ĳ���"			
			jiechang[8] = "�ؽ�ƽ"

			break
		case "��": 
			qktf[2] = "������"
			qktf[3] = "�ؿ���"
			qktf[4] = "̨��"
			qktf[12] = "���"
			qktf[5] = "�ؿ�"
			qktf[2] = "̨��"
			qktf[10] = "���"
			jiechang[2] = "�Ĳ���"			
			jiechang[9] = "�ؽ���"

			break
		case "��": 
			qktf[3] = "����ƽ"
			qktf[2] = "�ؿ���"
			qktf[5] = "̨��"
			qktf[1] = "���"
			jiechang[1] = "�Ĳ���"			
			jiechang[10] = "�ؽ�ƽ"

			break
		case "��": 
			qktf[4] = "������"
			qktf[1] = "�ؿ�ƽ"
			qktf[6] = "̨��"
			qktf[2] = "���"
			jiechang[12] = "�Ĳ���"			
			jiechang[11] = "�ؽ�ƽ"

			break
	}
}

function bu_huoling(nianzhu,shizhu) {
	var n = cycle(nianzhu,12) //��֧���� 
	var s = cycle(shizhu,12) //ʱ֧����
	switch(n){
		case 1:
		case 5:
		case 9:
			huoling[cycle(s+2,12)] = "����"
			huoling[cycle(s+10,12)] = "����"
			break

		case 2:
		case 6:
		case 10:
			huoling[cycle(s+3,12)] = "����"
			huoling[cycle(s+10,12)] = "����"
			break

		case 3:
		case 7:
		case 11:
			huoling[cycle(s+1,12)] = "����"
			huoling[cycle(s+3,12)] = "����"
			break

		case 4:
		case 8:
		case 12:
			huoling[cycle(s+9,12)] = "����"
			huoling[cycle(s+10,12)] = "����"
			break
	}
	huoling_miaowang(huoling)
}

function huoling_miaowang(huoling) { //huoling is an array
	switch(huoling.indexOf("����")) {
		case 1:
			huoling[1] = "����ƽ"
			break
		case 2:
			huoling[2] = "������"
			break
		case 3:
			huoling[3] = "������"
			break
		case 4:
			huoling[4] = "����ƽ"
			break
		case 5:
			huoling[5] = "������"
			break
		case 6:
			huoling[6] = "������"
			break
		case 7:
			huoling[7] = "������"
			break
		case 8:
			huoling[8] = "������"
			break
		case 9:
			huoling[9] = "������"
			break
		case 10:
			huoling[10] = "������"
			break
		case 11:
			huoling[11] = "������"
			break
		case 12:
			huoling[12] = "����ƽ"
			break
	}
	switch(huoling.indexOf("����")) {
		case 1:
			huoling[1] = "������"
			break
		case 2:
			huoling[2] = "������"
			break
		case 3:
			huoling[3] = "������"
			break
		case 4:
			huoling[4] = "������"
			break
		case 5:
			huoling[5] = "������"
			break
		case 6:
			huoling[6] = "������"
			break
		case 7:
			huoling[7] = "������"
			break
		case 8:
			huoling[8] = "������"
			break
		case 9:
			huoling[9] = "������"
			break
		case 10:
			huoling[10] = "������"
			break
		case 11:
			huoling[11] = "������"
			break
		case 12:
			huoling[12] = "������"
			break
	}
}

function bu_yuexi(fujie,bixingyao,tianma,tianwu,yueyin,yue){//��ϵ���ǣ����⡢����Ҧ���������ס�����
	for(var i=1;i<13;i++){
		fujie[i] = ""
		bixingyao[i] = ""
		tianma[i] = ""
		tianwu[i] = ""
		yueyin[i] = ""
	}
	switch(yue){
		case "һ":
			fujie[5] = "����"
			fujie[9] = "���"
			bixingyao[11] = "������"
			bixingyao[10] = "������"
			bixingyao[2] = "��Ҧƽ"
			tianma[9] = "����"
			tianwu[6] = "����"
			yueyin[11] = "����"
			yueyin[3] = "��ɷ"
			break			
		case "��":
			fujie[6] = "��ƽ"
			fujie[9] = "���"
			bixingyao[10] = "������"
			bixingyao[11] = "������"
			bixingyao[3] = "��Ҧ��"
			tianma[6] = "����"
			tianwu[9] = "����"
			yueyin[6] = "����"
			yueyin[1] = "��ɷ"
			break		
		case "��":
			fujie[7] = "����"
			fujie[11] = "���"
			bixingyao[9] = "������"
			bixingyao[12] = "������"
			bixingyao[4] = "��Ҧ��"
			tianma[3] = "����"
			tianwu[3] = "����"
			yueyin[5] = "����"
			yueyin[11] = "��ɷ"
			break		
		case "��":
			fujie[8] = "����"
			fujie[11] = "���"
			bixingyao[8] = "������"
			bixingyao[1] = "����ƽ"
			bixingyao[5] = "��Ҧ��"
			tianma[12] = "����"
			tianwu[12] = "����"
			yueyin[3] = "����"
			yueyin[9] = "��ɷ"
			break		
		case "��":
			fujie[9] = "��ƽ"
			fujie[1] = "���"
			bixingyao[7] = "������"
			bixingyao[2] = "������"
			bixingyao[6] = "��Ҧƽ"
			tianma[9] = "����"
			tianwu[6] = "����"
			yueyin[8] = "����"
			yueyin[7] = "��ɷ"
			break		
		case "��":
			fujie[10] = "����"
			fujie[1] = "���"
			bixingyao[6] = "����ƽ"
			bixingyao[3] = "������"
			bixingyao[7] = "��Ҧƽ"
			tianma[6] = "����ƽ"
			tianwu[9] = "����"
			yueyin[4] = "����"
			yueyin[5] = "��ɷ"
			break		
		case "��":
			fujie[11] = "����"
			fujie[3] = "���"
			bixingyao[5] = "������"
			bixingyao[4] = "������"
			bixingyao[8] = "��Ҧ��"
			tianma[3] = "����"
			tianwu[3] = "����"
			yueyin[12] = "����"
			yueyin[3] = "��ɷ"
			break		
		case "��":
			fujie[12] = "����"
			fujie[3] = "���"
			bixingyao[4] = "������"
			bixingyao[5] = "����ƽ"
			bixingyao[9] = "��Ҧ��"
			tianma[12] = "����"
			tianwu[12] = "����"
			yueyin[8] = "����"
			yueyin[1] = "��ɷ"
			break		
		case "��":
			fujie[1] = "����"
			fujie[5] = "���"
			bixingyao[3] = "������"
			bixingyao[6] = "������"
			bixingyao[10] = "��Ҧ��"
			tianma[9] = "����"
			tianwu[6] = "����"
			yueyin[3] = "����"
			yueyin[11] = "��ɷ"
			break		
		case "ʮ":
			fujie[2] = "����"
			fujie[5] = "���"
			bixingyao[2] = "������"
			bixingyao[7] = "����ƽ"
			bixingyao[11] = "��Ҧ��"
			tianma[6] = "����"
			tianwu[9] = "����"
			yueyin[7] = "����"
			yueyin[9] = "��ɷ"
			break		
		case "ʮһ":
			fujie[3] = "����"
			fujie[7] = "���"
			bixingyao[1] = "������"
			bixingyao[8] = "������"
			bixingyao[12] = "��Ҧ��"
			tianma[3] = "����"
			tianwu[3] = "����"
			yueyin[11] = "����"
			yueyin[7] = "��ɷ"
			break		
		case "ʮ��":
			fujie[4] = "����"
			fujie[7] = "���"
			bixingyao[12] = "����ƽ"
			bixingyao[9] = "������"
			bixingyao[1] = "��Ҧ��"
			tianma[12] = "����"
			tianwu[12] = "����"
			yueyin[3] = "����"
			yueyin[5] = "��ɷ"
			break		
	}
}

function bu_rixing(enguang,santai,bazuo,tiangui,ri,qktf,jiechang,fujie,bixingyao){//��ϵ�����⡢��̨�����������
	var wenqu_loc = locate("����",qktf)
	var wenchang_loc = locate("�Ĳ�",jiechang)
	var zuofu_loc = locate("��",fujie)
	var youbi_loc = locate("����",bixingyao)
	for(var i=1;i<13;i++){
		enguang[i] = ""
		santai[i] = ""
		bazuo[i] = ""
		tiangui[i] = ""
	}
	enguang[cycle(wenchang_loc+ri-2,12)] = "����"
	santai[cycle(zuofu_loc+ri-1,12)] = "��̨"
	bazuo[cycle(youbi_loc-ri+1,12)] = "����"
	tiangui[cycle(wenqu_loc+ri-2,12)] = "���"	

}

function bu_nianzhi_xi(kongkufeng,xulong,gugua,luanxifei,posui,suijian,jiangxing,nianzhi){//��ϵ���ǣ��¹ѡ��ϲ�㡢�տ޷����������
	for(var i=1;i<13;i++){
		kongkufeng[i] = ""
		xulong[i] = ""
		gugua[i] = ""
		luanxifei[i] = ""
		posui[i] = ""
	}

	switch(nianzhi){
		case "��":
			kongkufeng[2] = "���"
			kongkufeng[7] = "�����"
			kongkufeng[11] = "���"
			xulong[7] = "����ƽ"
			xulong[5] = "����"
			gugua[3] = "�³�"
			gugua[11] = "����"
			luanxifei[4] = "�����"
			luanxifei[10] = "��ϲ��"
			luanxifei[9] = "����"
			posui[6] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+1-1,12)] = suijian_xi[i]
				jiangxing[i] = jiangxing_xi[i]
			}
			break
		case "��":
			kongkufeng[3] = "���"
			kongkufeng[6] = "���"
			kongkufeng[10] = "���"
			xulong[8] = "������"
			xulong[6] = "����"
			gugua[3] = "�³�"
			gugua[11] = "����"
			luanxifei[3] = "�����"
			luanxifei[9] = "��ϲ��"
			luanxifei[10] = "����"
			posui[2] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+2-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+10-1,12)] = jiangxing_xi[i]
			}
			break		
		case "��":
			kongkufeng[4] = "���"
			kongkufeng[5] = "���ƽ"
			kongkufeng[9] = "���"
			xulong[9] = "������"
			xulong[7] = "����"
			gugua[6] = "�³�"
			gugua[2] = "����"
			luanxifei[2] = "�����"
			luanxifei[8] = "��ϲ��"
			luanxifei[11] = "����"
			posui[10] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+3-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+7-1,12)] = jiangxing_xi[i]
			}
			break		
		case "î":
			kongkufeng[5] = "���"
			kongkufeng[4] = "�����"
			kongkufeng[8] = "���"
			xulong[10] = "������"
			xulong[8] = "����"
			gugua[6] = "�³�"
			gugua[2] = "����"
			luanxifei[1] = "�����"
			luanxifei[7] = "��ϲ��"
			luanxifei[6] = "����"
			posui[6] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+4-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+4-1,12)] = jiangxing_xi[i]
			}
			break		
		case "��":
			kongkufeng[6] = "���"
			kongkufeng[3] = "���ƽ"
			kongkufeng[7] = "���"
			xulong[11] = "������"
			xulong[9] = "����"
			gugua[6] = "�³�"
			gugua[2] = "����"
			luanxifei[12] = "�����"
			luanxifei[6] = "��ϲ��"
			luanxifei[7] = "����"
			posui[2] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+5-1,12)] = suijian_xi[i]
				jiangxing[i] = jiangxing_xi[i]
			}
			break		
		case "��":
			kongkufeng[7] = "���"
			kongkufeng[2] = "�����"
			kongkufeng[6] = "���"
			xulong[12] = "����ƽ"
			xulong[10] = "����"
			gugua[9] = "�³�"
			gugua[5] = "����"
			luanxifei[11] = "�����"
			luanxifei[5] = "��ϲ��"
			luanxifei[8] = "����"
			posui[10] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+6-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+10-1,12)] = jiangxing_xi[i]
			}
			break		
		case "��":
			kongkufeng[8] = "���"
			kongkufeng[1] = "���ƽ"
			kongkufeng[5] = "���"
			xulong[1] = "������"
			xulong[11] = "����"
			gugua[9] = "�³�"
			gugua[5] = "����"
			luanxifei[10] = "�����"
			luanxifei[4] = "��ϲ��"
			luanxifei[3] = "����"
			posui[6] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+7-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+7-1,12)] = jiangxing_xi[i]
			}
			break		
		case "δ":
			kongkufeng[9] = "���"
			kongkufeng[12] = "���ƽ"
			kongkufeng[4] = "���"
			xulong[2] = "������"
			xulong[12] = "����"
			gugua[9] = "�³�"
			gugua[5] = "����"
			luanxifei[9] = "�����"
			luanxifei[3] = "��ϲ��"
			luanxifei[4] = "����"
			posui[2] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+8-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+4-1,12)] = jiangxing_xi[i]
			}
			break		
		case "��":
			kongkufeng[10] = "���"
			kongkufeng[11] = "���ƽ"
			kongkufeng[3] = "���"
			xulong[3] = "������"
			xulong[1] = "����"
			gugua[12] = "�³�"
			gugua[8] = "����"
			luanxifei[8] = "�����"
			luanxifei[2] = "��ϲ��"
			luanxifei[5] = "����"
			posui[10] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+9-1,12)] = suijian_xi[i]
				jiangxing[i] = jiangxing_xi[i]
			}
			break		
		case "��":
			kongkufeng[11] = "���"
			kongkufeng[10] = "�����"
			kongkufeng[2] = "���"
			xulong[4] = "������"
			xulong[2] = "����"
			gugua[12] = "�³�"
			gugua[8] = "����"
			luanxifei[7] = "�����"
			luanxifei[1] = "��ϲ��"
			luanxifei[12] = "����"
			posui[6] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+10-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+10-1,12)] = jiangxing_xi[i]
			}
			break		
		case "��":
			kongkufeng[12] = "���"
			kongkufeng[9] = "�����"
			kongkufeng[1] = "���"
			xulong[5] = "������"
			xulong[3] = "����"
			gugua[12] = "�³�"
			gugua[8] = "����"
			luanxifei[6] = "�����"
			luanxifei[12] = "��ϲ��"
			luanxifei[1] = "����"
			posui[2] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+11-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+7-1,12)] = jiangxing_xi[i]
			}
			break
		case "��":
			kongkufeng[1] = "���"
			kongkufeng[8] = "���ƽ"
			kongkufeng[12] = "���"
			xulong[6] = "������"
			xulong[4] = "����"
			gugua[3] = "�³�"
			gugua[11] = "����"
			luanxifei[5] = "�����"
			luanxifei[11] = "��ϲ��"
			luanxifei[2] = "����"
			posui[10] = "����"
			for(var i=1;i<13;i++){
				suijian[cycle(i+12-1,12)] = suijian_xi[i]
				jiangxing[cycle(i+4-1,12)] = jiangxing_xi[i]
			}
			break				
	}
}

function bu_shangshi_mingzhu(shangshi,shenming_gong){//���ˡ���ʹ
	switch(shenming_gong[0]){
		case 1:
			shangshi[6] = "����"
			shangshi[8] = "��ʹ"
			mingzhu = "̰��"
			break
		case 2:
			shangshi[7] = "����"
			shangshi[9] = "��ʹ"
			mingzhu = "����"
			break		
		case 3:
			shangshi[8] = "����"
			shangshi[10] = "��ʹ"
			mingzhu = "»��"
			break		
		case 4:
			shangshi[9] = "����"
			shangshi[11] = "��ʹ"
			mingzhu = "����"
			break		
		case 5:
			shangshi[10] = "����"
			shangshi[12] = "��ʹ"
			mingzhu = "����"
			break		
		case 6:
			shangshi[11] = "����"
			shangshi[1] = "��ʹ"
			mingzhu = "����"
			break		
		case 7:
			shangshi[12] = "����"
			shangshi[2] = "��ʹ"
			mingzhu = "�ƾ�"
			break		
		case 8:
			shangshi[1] = "����"
			shangshi[3] = "��ʹ"
			mingzhu = "����"
			break		
		case 9:
			shangshi[2] = "����"
			shangshi[4] = "��ʹ"
			mingzhu = "����"
			break		
		case 10:
			shangshi[3] = "����"
			shangshi[5] = "��ʹ"
			mingzhu = "����"
			break		
		case 11:
			shangshi[4] = "����"
			shangshi[6] = "��ʹ"
			mingzhu = "»��"
			break		
		case 12:
			shangshi[5] = "����"
			shangshi[7] = "��ʹ"
			mingzhu = "����"
			break			
	}
}

function ding_shenzhu(shenzhu,shenming_gong){//���ˡ���ʹ
	switch(shenming_gong[1]){
		case 1:
			shenzhu = "����"
			break
		case 2:
			shenzhu = "����"
			break	
		case 3:
			shenzhu = "����"
			break	
		case 4:
			shenzhu = "��ͬ"
			break		
		case 5:
			shenzhu = "�Ĳ�"
			break	
		case 6:
			shenzhu = "���"
			break	
		case 7:
			shenzhu = "����"
			break	
		case 8:
			shenzhu = "����"
			break		
		case 9:
			shenzhu = "����"
			break	
		case 10:
			shenzhu = "��ͬ"
			break	
		case 11:
			shenzhu = "�Ĳ�"
			break	
		case 12:
			shenzhu = "���"
			break		
	}
}

function bu_daxian(daxian,shier_gong,ju,shunni){//����
	var start, end
	var ming = locate("����  ����",shier_gong)
	if(shunni = "shun"){
		for(var i=1;i<13;i++){
			end = (i*10) + ju
			start = end - 9
			if(start < 0){start = 0}
			daxian[cycle(ming+i-1,12)] = start + "-" + end
		}
	}else {
		for(var i=1;i<13;i++){
			end = (i*10) + ju
			start = end - 9
			if(start < 0){start = 0}
			daxian[cycle(ming-i+1,12)] = start + "-" + end
		}
	}

}

function bu_zhangsheng(zhangsheng,ju,shunni){//����
	var jushu = ju[1]
	switch(jushu){
		case "2":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "3":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(12+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(12-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "4":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(6+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(6-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "5":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(9-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
		case "6":
			if(shunni=="shun"){
				for(var i=1; i<13;i++){
					zhangsheng[cycle(3+i-1,12)] = shier_zhangsheng[i] 
				}
			} else {
				for(var i=1; i<13;i++){
					zhangsheng[cycle(3-i+1,12)] = shier_zhangsheng[i] 
				}
			}
			break
	}
}
function sihua(gan,zhuxing){
	var h
	switch(gan) {
		case "��":
			if(zhuxing=="����") {
				h = "»"
			} else if(zhuxing=="�ƾ�") {
				h = "Ȩ"
			} else if(zhuxing=="����") {
				h = "��"
			} else if(zhuxing=="̫��"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="���") {
				h = "»"
			} else if(zhuxing=="����") {
				h = "Ȩ"
			} else if(zhuxing=="��΢") {
				h = "��"
			} else if(zhuxing=="̫��"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="��ͬ") {
				h = "»"
			} else if(zhuxing=="���") {
				h = "Ȩ"
			} else if(zhuxing=="�Ĳ�") {
				h = "��"
			} else if(zhuxing=="����"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="̫��") {
				h = "»"
			} else if(zhuxing=="��ͬ") {
				h = "Ȩ"
			} else if(zhuxing=="���") {
				h = "��"
			} else if(zhuxing=="����"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="̰��") {
				h = "»"
			} else if(zhuxing=="̫��") {
				h = "Ȩ"
			} else if(zhuxing=="����") {
				h = "��"
			} else if(zhuxing=="���"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="����") {
				h = "»"
			} else if(zhuxing=="̰��") {
				h = "Ȩ"
			} else if(zhuxing=="����") {
				h = "��"
			} else if(zhuxing=="����"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="̫��") {
				h = "»"
			} else if(zhuxing=="����") {
				h = "Ȩ"
			} else if(zhuxing=="̫��") {
				h = "��"
			} else if(zhuxing=="��ͬ"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="����") {
				h = "»"
			} else if(zhuxing=="̫��") {
				h = "Ȩ"
			} else if(zhuxing=="����") {
				h = "��"
			} else if(zhuxing=="�Ĳ�"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="����") {
				h = "»"
			} else if(zhuxing=="��΢") {
				h = "Ȩ"
			} else if(zhuxing=="��") {
				h = "��"
			} else if(zhuxing=="����"){
				h = "��"
			}
			break
		case "��":
			if(zhuxing=="�ƾ�") {
				h = "»"
			} else if(zhuxing=="����") {
				h = "Ȩ"
			} else if(zhuxing=="̫��") {
				h = "��"
			} else if(zhuxing=="̰��"){
				h = "��"
			}
			break
	}
	
}

function bu_doujun(doujun,yue_num,c){
	for(var i=1;i<13;i++){
		doujun[i] = ""
	}
	var h = cycle(c.hGz(),12)
	
	doujun[cycle(h-yue_num+1,12)] = "����"
}