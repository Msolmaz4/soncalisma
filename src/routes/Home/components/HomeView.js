import React from 'react'



export const HomeView = () => (
  <div className="home-container">
    <div className="container">
      <h1>Ogretmenler icin<br />Baslangic Noktasi</h1>

      <form className="form-inline">
        <div className="form-group">
          
          <input type="text" className="form-control" placeholder="eposta"/>
          </div>
        <div className="form-group mx-sm-3">
          
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        
          <button type="submit" className="btn btn-primary">Confirm identity</button>
          
          <a href="#">Sifremi unuttum!</a>
        
      </form>


      <p>henuz uye olmadiniz mi?<br/>
      Ucretsiz uye olmak icin <b>tiklayiniz</b>
       
      
      </p>
    </div>


  </div>
)

export default HomeView
