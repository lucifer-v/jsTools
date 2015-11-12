#常用JS函数扩展概览
##Array扩展
###PHP同名函数扩展

###其他扩展
1. Array::oddFilter( [_retFiltered] )
2. Array::evenFilter( [_retFiltered] )
3. Array::modFilter( _mod[, _retFiltered] )
4. Array::sum( [_recurFlag] )
5. Array::rmv( _el[, _delAll] )

##String扩展
###PHP同名函数扩展
1. String::ltrim()   **[PHP同名]**
2. String::rtrim()	 **[PHP同名]**
3. String::strrev()  **[PHP同名]** 
4. String::ucfirst() **[PHP同名]**
5. String::lcfirst() **[PHP同名]**

###其他扩展


##vTools类
###类型检测
1. vTools::br()
2. vTools::echo([var[,...]])		**[PHP同名]**
3. vTools::is_array( _var ) 		**[PHP同名]**
4. vTools::is_bool( _var )			**[PHP同名]**
5. vTools::is_double( _var )		**[PHP同名]**
6. vTools::is_callable( _var )		**[PHP同名]**
7. vTools::rand( _iFrom, _iTo )		**[PHP同名]**
###HTML相关
1. vTools::getByteNum()
2. vTools::getHex([_upperFlag])
3. vTools::getRgb([_upperFlag])	
4. vTools::range( _iFrom, _iTo )	**[PHP同名]**
###数据转换
1、vTools::objToReqStr( _obj, _reqMethod )

##非原创功能