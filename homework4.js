var setStorage, getStorage, setStorageMulti, getStorageMulti;

(function()
{
	var storage = {};
	
	setStorage = function setStorageLocal( name, value ){
	storage[name] = value;
	return (storage +" was stored!");
	}
	
	getStorage = function getStorageLocal(name){
	return storage[name];
	}
	
	setStorageMulti = function setStorageMultiLocal (passedObject){
	storage = passedObject;
	return (storage +" was stored!");
	}
	
	getStorageMulti = function getStorageMultiLocal (passArray){
	for(var i = 0; i < passArray.length; i++ )
		{
		console.log(storage[passArray[i]]);
		}
	}
})();