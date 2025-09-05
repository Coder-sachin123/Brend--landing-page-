export default function Hero(){
    return(
        <main className=" hero  container">
            <div className="Hero-content ">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND  WE'RE HERE TO HELP TO HELP YOU WITH OUR 
                    SHOES. YOUR FEET DESERVE THE BEST AND  WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="Hero-btn">
                    <button>shop Name</button>
                   <button className="secondery-btn">Category</button>
                </div>
              <div className="shoping">
                  <p>Also Avilable On </p>
                 <div className="brend-icons">
                     <img src="/image/amazon.png" alt="amazone-logo"/>
                     <img src="image/flipkart.png" alt="flipkart-logo" />
                 </div>

             </div>
            </div>
            <div className="Hero-image">
                <img src="image/shoe_image.png" alt="Shoe.logo"/>
            </div>
            
        </main>
    );
}