const baseUrl = ""

export reqGet(url,data){
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