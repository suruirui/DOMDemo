/**
 * Created by water on 2016/11/11.
 */
function $(id){return document.getElementById(id);}

function show(id){
    $(id).style.display = 'block';
}

function hide(id){
    $(id).style.display = 'none';
}

function scroll(){
    if(window.pageYOffset != null){  //ie9+
        return{
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if(document.compatMode == "CSS1Compat"){  //�ж��Ƿ�Ϊ����ģʽ��CSS1Compat���ĵ����� BackCompat  δ����
        return {
            left:document.documentElement.scrollLeft,
            top :document.documentElement.scrollTop
        }
    }else{  //ʣ�µľ��ǹ���ģʽ,û���ĵ�������
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}