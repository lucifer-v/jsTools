/** Array扩展 **/
/**
 *过滤出一个整数数组中的奇数元素
 *默认返回被滤出的元素构成的数组
 *
 *@date 2015/05/17 
 *
 *@param boolean _retFiltered 标识是返回被滤出的元素集，还是剩下的元素集
* @return _retFiltered 为true ，返回被滤出的元素
*					  _retFiltered 为false，返回剩下的元素
 */
Array.prototype.oddFilter = function( _retFiltered ){

		if( undefined == _retFiltered ){		//兼容处理,默认返回被过滤的
				_retFiltered = true; 
		}

		var filterAry = [], remainsAry = [];
		for(var i = 0, len = this.length; i < len; i++){
				if(0 != this[i]%2 ){
						filterAry.push( this[i] );	
				}else{
						remainsAry.push( this[i] );
				}
		}//func

		return (_retFiltered) ? filterAry : remainsAry ;
}//oddFilter

/**
 *过滤出一个整数数组中的偶数元素
 *默认返回被滤出的元素构成的数组
 *
 *@date 2015/05/17 
 *
 *@param boolean _retFiltered 标识是返回被滤出的元素集，还是剩下的元素集合
* @return _retFiltered 为true ，返回被滤出的元素
*					  _retFiltered 为false，返回剩下的元素
 */
Array.prototype.evenFilter = function( _retFiltered ){

		if( undefined == _retFiltered ){		//兼容处理,默认返回被过滤的
					_retFiltered = true; 
		}

		var filterAry = [], remainsAry = [];
		for(var i = 0, len = this.length; i < len; i++){
				if(0 == this[i]%2 ){
						filterAry.push( this[i] );	
				}else{
						remainsAry.push( this[i] );
				}
		}//func

		return (_retFiltered) ? filterAry : remainsAry ;
}//evenFilter

/**
 *过滤出一个整数数组中能够被某值整除的元素集
 *默认返回被滤出的元素构成的数组
 *
 *@date 2015/10/06
 *
 *@param boolean _num 用作过滤的整数
 *@param boolean _retFiltered 标识是返回被滤出的元素集，还是剩下的元素集合
* @return _retFiltered 为true ，返回被滤出的元素
*					  _retFiltered 为false，返回剩下的元素
 */
Array.prototype.modFilter = function( _num, _retFiltered ){

		if( undefined == _retFiltered ){		//兼容处理,默认返回被过滤的
					_retFiltered = true; 
		}

		var filterAry = [], remainsAry = [];
		for(var i = 0, len = this.length; i < len; i++){
				if(0 == this[i]%_num ){
						filterAry.push( this[i] );	
				}else{
						remainsAry.push( this[i] );
				}
		}//func

		return (_retFiltered) ? filterAry : remainsAry ;
}//modFilter

/**
  *计算一个数组中所有数值型元素的和
  *
  *@date 2015/05/17
  *@notes 建议提供所有元素都是实数的属组
  *				 错误未处理
  *
  *@param boolean _recurFlag 是否支持递归计算(默认为false)
  *@return 元素累加和
  */
Array.prototype.sum = function( _recurFlag ){
		
		_recurFlag = ( true === _recurFlag ) ? true : false ;		//参数处理

		var sum=0, isAry;
		for(var i=0, len = this.length; i < len; i++){
				isAry = this[i] instanceof Array;
				if( _recurFlag ){		//如果递归
						if( isAry ){
								sum += arguments.callee.call( this[i], _recurFlag );
						}else{
								sum += this[i];
						}
				}else{		//如果不递归, 且不是属组
						if( !isAry )  sum += this[i]; 
				}//if
				
		}//for
		return sum;
}//sum


/**
 *删除从左往右在数组内遇到的某个元素("值")
 *
 *@date 2015/06/18
 *@note 此函数不可重入
 *
 *@param mixed _el 待删除的元素
 *@param boolean _delAll 是否删除全部(默认false)
 *					 如果为false  删除从左往右遇到的第一个与指定值相同的元素
 *					 如果为true   删除数组中所有与指定值相同的元素
 */
Array.prototype.rmv = function( _el, _delAll ){
		
		_delAll = ( true === _delAll ) ? true : false;
		var index;		//记录索引

		while( ( index = this.indexOf( _el ) ) > -1 ){
				 this.splice(index, 1);
			     if( !_delAll )	break;
		}//while
}//rmv


/*######### String扩展 #########*/
/**
  *截去一个字符串左侧空白字符
  *@date 06/14/2015
  *@note 可重入方法
  *@todo 功能还不完善
  *
  *@return 处理后的字符串
  */
String.prototype.ltrim=function(){

		return this.replace(/^\s*/, "");
}//func

/**
  *截去一个字符串右侧空白字符
  *@date 06/14/2015
  *@note 可重入方法
  *@todo 功能还不完善
  *
  *@return 处理后的字符串
  */
String.prototype.rtrim=function(){

		return this.replace(/\s*$/, "");
}//func

/**
  *将一个字符串反转
  *@date 2015/06/17
  *@note 可重入方法
  */
String.prototype.strrev = function(){

		var revStr="",  len = this.length;
		while( len-- ){ revStr += this[len]; }

		return revStr;
}//String.strrev

/**
 *将一个字符串的首字母大写
*@date 2015/06/17
*@note 可重入方法
*/
String.prototype.ucfirst=function(){

		return this.substr(0, 1).toUpperCase() + this.substr(1);
}//String.ucfirst

/**
 *将一个字符串的首字母小写
*@date 2015/06/17
*@note 可重入方法
*/
String.prototype.lcfirst=function(){

		return this.substr(0, 1).toLowerCase() + this.substr(1);
}//String.lcfirst

/*###### vTools类  ######*/
function vTools(){}

/**
*在浏览器上输出一个换行
*@date 2015/08/17
*/
vTools.prototype.br = function(){

		document.write( "<br />" );
}//br

/**
*在浏览器上输出一个变量, 与PHP语言结构echo同名
*@param 支持可变参数
*@date 2015/10/06
*/
vTools.prototype.echo = function(){

		var strToShow = "";
		for( var i = 0, len = arguments.length; i<len; i++  ){
				strToShow += arguments[i];
		}
		document.write( strToShow );
}//br

/**
 *检测给定变量是否是数组
 *@date 2015/08/17
 *@param mixed _obj 待检测的对象或变量
 *@return 是,返回true;  不是,返回false
 */
vTools.prototype.is_array = function( _obj ){

		return ( _obj instanceof Array );
}//func

/**
*变量是否是布尔类型
* 
*@date: 2015/08/17 20:24
*@param mixed _obj 待检测的对象或变量
*@return 是,返回true; 不是,返回false
*/
vTools.prototype.is_bool = function( _var ){

		return "boolean" === ( typeof _var );
}//func

/**
*给定的数(或数字型字符串)是否是实数
*
*@date: 2015/08/17 20:24
*@param mixed _obj 待检测的对象或变量
*@return 是,返回true; 不是,返回false
*/
vTools.prototype.is_double = function( _val ){
		
		var newVal = parseFloat( _val );
		return _val == newVal;
}//is_double

/** 
 *给定变量是否是一个可调用结构
 *@date 2015/06/24
 *@param mixed _obj 待检测的对象或变量
 *@note  依据:   typeof struct == "function"  或
 *								 struct instance of Function								
 **/
vTools.prototype.is_callable = function(_struct){

		return (_struct instanceof Function);
}//is_callable

/**
  *返回[_iFrom, _iTo]的随机整数
  *@param int _iFrom  起始整数
  *@param int _iTo 终止整数
  *Date: 2015/06/17
  */
vTools.prototype.rand= function( _iFrom, _iTo ){

	return Math.floor(  _iFrom + Math.random()*(_iTo - _iFrom + 1));
}//func

/**
 *随机返回一个0--255之间的整数
 *@date 2015/ 06/18
 *@apply 颜色取值
 */
vTools.prototype.getByteNum = function(){

		return Math.floor( Math.random()*256 );
}//buildIpNum

/**
 *随机返回一个十六进制数
 *@date 2015/06/18
 *
 *@param _upperFlag 如果为true则返回大写形式
 *@return 返回一个十六进制的数,默认小写
 */
vTools.prototype.getHex = function( _upperFlag ){

		var rChar = Math.floor( ( Math.random()*16 ) ).toString("16");
		return ( _upperFlag ? rChar.toUpperCase() : rChar );
}//getHex

/**
 *随机返回一个'#XXXXXX'格式的 十六进制大写的rgb颜色
 *@date 2015/06/18
 *@para  _upperFlag  返回大写形式则为true
 */
vTools.prototype.getRgb = function( _upperFlag ){

		var rgb = '#', func = vTools.prototype.getHex;
		for( var i = 0; i < 6; i++ ){  rgb += func( _upperFlag ); }
		return rgb;
}//getRgb

/**
  *创建一个整数数组，其元素范围为[_iFrom, _iTo]
  *@date 2015/10/06 17:07
  *@todo 行为和PHP一致
  *
  *@param int _iFrom 起始元素
  *@param int _iTo	末尾元素
  *@return array 所求数组
  */
  vTools.prototype.range = function( _iFrom, _iTo){
		
		var retAry = [];
		for( var i = _iFrom; i <= _iTo; i++ ){
				retAry.push( i );
		}
		return retAry;
  }//range