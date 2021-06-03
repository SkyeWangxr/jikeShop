const baseUrl = "http://1.15.157.130";

export function reqGet(url,data){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + url,
			method:"GET",
			data:data,
			success:(res) => {
				resolve(res)
			},
			fail:(err) =>{
				reject(err)
				console.log(err)
			}
		})
	})
}

export function reqPost(url,data){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + url,
			method:"POST",
			data:data,
			success:(res) => {
				resolve(res)
			},
			fail:(err) =>{
				reject(err)
				console.log(err)
			}
		})
	})
}