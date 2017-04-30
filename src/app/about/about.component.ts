import { Component } from '@angular/core';


@Component({
    selector: 'app-event-list',
    templateUrl: './about.component.html',
    styles: []
})
export class AboutComponent {

    public gtccIconUrl = '../../assets/images/icons/gtcc-icon.jpg';
    public hot4sImageUrl = '../../assets/images/GT_hot4s1a.jpg';
    public hot4sImageAltText = 'GTCC Hot4s feature 2001';

    public facebookIconUrl = '../../assets/images/icons/facebook-icon.jpg';
    public facebookIconAltText = 'Facebook Icon';
    public facebookLinkUrl = 'https://www.facebook.com/gtccoz/';

    public instagramIconUrl = '../../assets/images/icons/instagram-icon.jpg';
    public instagramIconAltText = 'Instagram Icon';
    public instagramLinkUrl = 'https://www.instagram.com/gtcarclub/';

    public vimeoIconUrl = '../../assets/images/icons/vimeo-icon.jpg';
    public gtccTrackDayPromo2AltText = 'GTCC Track day Promo 01 (2016) video';
    public gtccTrackDayPromo2Video = 'https://vimeo.com/193623050';

    public gtccCharityCarwash2017AltText = 'GTCC Charity Carwash for Prostate Cancer 2017';
    public vimeoGTCCCharityCarwash2017 = 'https://vimeo.com/207094609';

    public gtccCharityCarwash2014AltText = 'GTCC Charity Carwash for Prostate Cancer 2014';
    public vimeoGTCCCharityCarwash2014 = 'https://vimeo.com/179109690';

    public gtccTrackDayPromo1AltText = 'GTCC Track day Promo 01 (2016) video';
    public gtccTrackDayPromo1Video = 'https://vimeo.com/168586322';

    public gtccJDMLegends1AltText = 'GTCC JDM Legends photo/video shoot';
    public gtccJDMLegends1Video = 'https://vimeo.com/159725381';

    public gtccCarsAndCoffeeTeaserAltText = 'GTCC - Custom Cars and Coffee 2017 Teaser';
    public gtccCarsAndCoffeeTeaserVideo = 'https://vimeo.com/210244168';


    constructor() {

    }
}
