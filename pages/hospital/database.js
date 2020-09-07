const getDataRS = async () => {
    try {
      let response = await fetch("https://5f55a45f39221c00167fb0c7.mockapi.io/covid19/RumahSakit");
      let data = await response.json();
  
      console.log("data rs", data);

      let listContainer = document.getElementById('list-container');

      data.forEach((el)=>{
          let hospitalContainer = document.createElement('div');
          hospitalContainer.innerHTML=`
          <div class="row">
            <div class="container-list-host row" id='container-list-host'>
              <div class="row">
                <div class="col l4 s3 img-field">
                </div>
                <div class="col  l8 s9">
                  <p id="hospitalName">${el.namaRumahSakit}</p>
                    <span id="hospitalAdress">${el.alamatRS}</span>  
                  </p>
                  <p id='hospitalCity'>${el.KotaRS}</p>
                  <p><span id="test-method">&check; Rapid test </span><span class="price">(Rp ${el.biayapcr})</p>
                  <p><span id="test-method">&check; PCR / Swab test </span><span class="price">(${el.biayarapid})</p>
                  
                    <button type="button" class="collapsible">pilih lokasi tes</button>
                    <div class="content">
                      <p>
                        Biaya termasuk
                        <ul>
                          <li> &check; Surat hasil test</li>
                          <li> &check; Konsultasi dokter umum</li>
                        </ul>
                        <a class="waves-effect waves-light btn"><i class="material-icons right">arrow_forward</i>lanjutkan</a>
                      </p>
                </div>
                </div>
              </div>
            </div>
          `
          listContainer.appendChild(hospitalContainer);

      })


    } catch {
      console.log("maaf server sedang maintenance");
    }
}

getDataRS()

