import React from 'react';
import './AuctionCard.css'; // Import your CSS file

// AuctionCard Component
const AuctionCard = ({ title, dateStart, dateEnd, imgSrc, propertyLink, termsLink, catalogLink, isFirst, secondAuctionInfo }) => {
  return (
    <div className="card mb-4">
      <div 
        className="card-header text-white text-center" 
        style={{ backgroundColor: 'blue', fontSize: '24px' }} // Set the header font size
      >
        {title}
      </div>
      <div className="card-body">
        {/* Conditionally render for the first card */}
        {isFirst && (
          <>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
              November 01, 2024
            </p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
              Preview:
            </p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
              Registration: --------
            </p>
            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
              Auction Start: 12:00 PM
            </p>
          </>
        )}
        
        {/* Conditionally render for the second card */}
        {!isFirst && secondAuctionInfo && (
          <>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {secondAuctionInfo.date}
            </p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
              {secondAuctionInfo.preview}
            </p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
              {secondAuctionInfo.registration}
            </p>
            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
              {secondAuctionInfo.auctionStart}
            </p>
          </>
        )}

        {/* Auction image */}
        <img 
          src={imgSrc} 
          alt={`Auction for ${title}`} 
          className="auction-image mb-3" // Use CSS class for image styling
        />
        
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <strong>Online Auction Start:</strong> {dateStart}
        </p>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <strong>Online Auction Close:</strong> {dateEnd}
        </p>
        <p>
            Be sure to create an account with us, if you do not already have one, before sending us your Bidder Registration Packet.
            Click here to be directed to our registration page. 
            <a href="https://www.youtube.com/watch?v=XG-60tnpUPg" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>
          <p>
            Please use promotional code LOCKPORT24 at registration to waive the one-time $10 membership fee. 
            <strong>You will still need to enter a valid Credit Card number at registration which is used for identity verification purposes.</strong>
          </p>
          <p>
            To participate in this auction, all bidders will need to submit either the E-Sign version OR the printable Online Bidder Registration Packet. 
            Even if you have registered for a previous tax auction, you will need to submit a new bidder packet that is specific to this auction. 
            The E-Sign version is our preferred method of registration.
          </p>
          <p style={{color: "red"}}>
            E-SIGN Online Bidder Registration Request Form: 
            <a href="https://app.goformz.com/s/cUJanx9fH0dlOG5dVQp" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
            </p>
            <p style={{color: "red"}}>
            After we receive your request the registration packet will be emailed to you by the end of the following business day. 
            Once received you must fill out and return to us by 4 pm on Wednesday, November 13, 2024
            (PLEASE CHECK YOUR SPAM/JUNK FOR THE REGISTRATION PACKET BEFORE CONTACTING OUR OFFICE)
          </p>
          <p style={{color: "red"}}>
            OR <i>(only one completed version is required, please do not complete both)</i>
          </p>
          <p style={{color: "red"}}>
          Printable Online Bidder Registration Packet: 
            <a href="https://auctionftp.com/s/PWDgPLb4qN3t3AS" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
            </p>
          <p>
            Absentee Bidder Registration Packet: COMING SOON
          </p>
          <p>
            Printable Online Bidder Registration Packet: 
            <a href="https://auctionftp.com/s/PWDgPLb4qN3t3AS" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>
          <p>
            Online Auction Link: <a href="https://www.auctionsinternational.com/auction/city-of-lockport-tax-foreclosed-real-estate-auction-39574-39574" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>

          <p>
            Property List: <a href="https://auctionftp.com/s/fd3JPZaWNw4CkP7" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>
          <p>
            Terms & Conditions: <a href="https://auctionftp.com/s/PWzKsp4Y4ATzo6b" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>
          <p>
            Catalog: <a href="https://auctionftp.com/s/e3MFNHBFzGZ75Ar" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>
          <p>
            Lead Paint Brochure: <a href="https://auctionftp.com/s/MAjS4C5Agaztoz8" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>
          <p>
            Fair Housing Notice: <a href="https://auctionftp.com/s/XBqdBmNCDHZQetf" className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>CLICK HERE</a>
          </p>
          <p>
            <strong>ONLINE BIDDER REGISTRATION PACKETS ARE SPECIFIC TO EACH AUCTION. PLEASE BE SURE TO EXECUTE THE CORRECT PACKET FOR THE SALE YOU ARE INTERESTED IN PARTICIPATING IN.</strong>
          </p>
        <div className="d-flex flex-column">
          {propertyLink && <a href={propertyLink} className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>Property List</a>}
          {termsLink && <a href={termsLink} className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>Terms & Conditions</a>}
          {catalogLink && <a href={catalogLink} className="btn btn-link" style ={{textDecoration: 'none', fontSize: "13px", fontWeight: "bold", color: "black"}}>Catalog</a>}
        </div>
        <p>
            www.LockportAuction.com
          </p>
      </div>
    </div>
  );
};

export default AuctionCard;




