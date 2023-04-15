export function populateToolsGrid() {
	fetch('/src/tools.json')
		.then((response) => response.json())
		.then((data) => {
			
			let keys = Object.keys(data);
			let el = document.querySelector('#tools');
			let html = '';
            console.log(data[keys[0]].disabled);
			for (let i = 0; i < keys.length; i++) {
                if(!data[keys[i]].disabled){
                    html += `<div class="col-md-4">
                   <a style="text-decoration:none" href="${data[keys[i]].file}"> <div class="card mb-4">
                        <div class="card-body" style="height:150px;">
                            <h5 class="card-title">${keys[i]}</h5>
                            <p class="card-text" style="text-overflow:ellipsis;">${
                                data[keys[i]].description
                            }</p>
                        </div>
                    </div></a>
                </div>`;
                }
				
			}
			el.innerHTML = html;
		})
		.catch(function (error) {
			console.error(error);
			alert('There was a problem getting the tools json');
		});
}

export function addNav() {
	fetch('/components/nav.html')
		.then((response) => response.text())
		.then((body) => {
            document.querySelector('#nav').innerHTML = body;
        })
		.catch(function (error) {
			console.error(error);
			alert('There was a problem getting the tools json');
		});
}

export function addFooter(){
    fetch('/components/footer.html')
      .then((response) => response.text())
      .then((body) => {
            document.querySelector('#footer').innerHTML = body;
        })
      .catch(function (error) {
            console.error(error);
            alert('There was a problem getting the tools json');
        });
}

export function getPublicIpInformation(){
    fetch("https://hutils.loxal.net/whois")
      .then((response) => response.json())
      .then((data) => {
            console.log(data);
            document.querySelector('#ip').innerHTML = `My Public IP: <a id="toastButton" href="javascript:void(0)" onClick="CopyToClipboard('${data.ip}')">${data.ip}</a> `;
            document.querySelector('#city').innerHTML = `My City: ${data.city}`;
            document.querySelector('#country').innerHTML =`My Country: ${data.country}`;
            document.querySelector('#isp').innerHTML = `My ISP: ${data.isp}`;
            showToastForCopiedIp();
        })
      .catch(function (error) {
            console.error(error);
            alert('There was a problem getting your ip information');
        });
}


export function CopyToClipboard(txt) {
    navigator.clipboard.writeText(txt)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch(error => {
      console.error("Could not copy text: ", error);
    });

}

export function showToastForCopiedIp(){
const toastTrigger = document.getElementById('toastButton')
const toastLiveExample = document.getElementById('toast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

}