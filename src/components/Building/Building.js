import React from 'react';
import {listingOptionalShape} from '../../propz/listingProp';
import {formatPrice} from '../../helper';
import BuildingTile from '../BuildingTile/BuildingTile';
import './Building.css';

class Buildings extends React.Component
{
  static propTypes = {
    listing: listingOptionalShape,
  };

  render ()
  {
    const {listing} = this.props;
    if (listing.nope)
    {
      return (
        <div className="Building">
          <h1 className="unknown-listing"><span className="glyphicon glyphicon-arrow-left"></span>Select a Listing</h1>
        </div>
      );
    };
    return (
      <div className="Building">
        <div className="row">
          <div className="col-xs-6">
            <img className="building-image" src={listing.imageUrl} alt="selected building" />
          </div>
          <div className="col-xs-6">
            <h4>{formatPrice(listing.price)}</h4>
            <p>{formatPrice(listing.estimatedMonthlyMorgage)} /month</p>
            <h4>{listing.address} {listing.city}, {listing.state} {listing.zip}</h4>
            <h5>{listing.numBeds} Bed/{listing.numBaths} Bath</h5>
            <h5>{listing.squareFootage} ft<sup>2</sup></h5>
            <p>{listing.description}</p>
          </div>
        </div>
        <div className="row">
          <BuildingTile
            imageSrc= 'cal'
            altText= 'calender'
            pTagText= {`Built: ${listing.yearBuilt}`}
          />
          <BuildingTile
            imageSrc= 'hill'
            altText= 'hill'
            pTagText= {listing.lotInAcres}
          />
          <BuildingTile
            imageSrc= 'flame'
            altText= 'flame'
            pTagText= {listing.heating}
          />
          <BuildingTile
            imageSrc= 'snow'
            altText= 'snowflake'
            pTagText= {listing.cooling}
          />
        </div>
      </div>
    );
  }
}

export default Buildings;
