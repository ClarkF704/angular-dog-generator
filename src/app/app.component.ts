import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;

  includeLoyal = false;
  includeObidient = false;
  includeFearful = false;
  includeActive = false;
  includeFat = false;

  dog = '';

  dogPhoto;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)
    if(!isNaN(parsedValue)){
      this.length = parsedValue
    }
  }
  

  isLoyal() {
    this.includeLoyal = !this.includeLoyal;
  }
  isObidient() {
    this.includeObidient = !this.includeObidient;
  }
  isFearful() {
    this.includeFearful = !this.includeFearful;
  }
  isActive() {
    this.includeActive = !this.includeActive;
  }
  isFat() {
    this.includeFat = !this.includeFat;
  }

  onButtonClick() {
    this.dogPhoto = ''
    const loyalDogs = ['Great Pyrenees', 'Collie', 'German Shepard', 'Beagle', 'Labrador Retriever', 'Rottweiler', 'Akita', 'Chihuahua'];
    const obedientDogs = ['Collie', 'Poodle', 'German Shepard', 'Golden Retriever', 'Doberman Pinscher'];
    const fearfulDogs = ['Mastiff', 'Vizsla', 'Maltese', 'Papillon', 'Great Dane', 'Akita', 'Yorkshire terrier', 'Greyhound', 'Norfolk terrier', 'Dalmatian'];
    const activeDogs = ['Belgian Malinois', 'Dalmatian', 'Russell Terrier', 'Siberian Husky', 'Australian Shepherd'];
    const fatDogs = ['Dachshund', 'Scottish Terrier', 'Beagle', 'Cocker Spaniel', 'Basset Hound', 'Labrador Retriever', 'Rottweiler'];

    let dogList = [];

    if(this.includeLoyal){
      dogList.push(loyalDogs);
    }
    if(this.includeActive){
      dogList.push(activeDogs)
    }
    if(this.includeObidient){
      dogList.push(obedientDogs)
    }
    if(this.includeFearful){
      dogList.push(fearfulDogs)
    }
    if(this.includeFat){
      dogList.push(fatDogs)
    }

    let randomDog = dogList[Math.floor(Math.random() * dogList.length)]
    let randomSingleDog = randomDog[Math.floor(Math.random() * randomDog.length)]
    console.log(randomDog)
    console.log(randomSingleDog)

    this.dog = randomSingleDog;

    if(randomSingleDog == 'Collie'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/10130454/Collie-standing-in-a-field.jpg'
    }
    if(randomSingleDog == 'German Shepard'){
      this.dogPhoto = 'https://highlandcanine.com/wp-content/uploads/2020/12/iStock-926735822.jpg'
    }
    if(randomSingleDog == 'Great Pyrenees'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/28143033/Great-Pyrenees-standing-on-the-beach.jpg'
    }
    if(randomSingleDog == 'Beagle'){
      this.dogPhoto = 'https://vetstreet.brightspotcdn.com/dims4/default/acfa4c4/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F7b%2F0526609e8c11e0a2380050568d634f%2Ffile%2FBeagle-3-645mk062311.jpg'
    }
    if(randomSingleDog == 'Labrador Retriever'){
      this.dogPhoto = 'https://vetstreet.brightspotcdn.com/dims4/default/03f7acf/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F36%2F4fccb0a10611e087a80050568d634f%2Ffile%2FLabrador-4-645mk062111.jpg'
    }
    if(randomSingleDog == 'Rottweiler'){
      this.dogPhoto = 'https://vetstreet.brightspotcdn.com/dims4/default/90eead8/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fce%2Fd2db70a7fb11e0a0d50050568d634f%2Ffile%2FRottweiler-4-645mk062811.jpg'
    }
    if(randomSingleDog == 'Akita'){
      this.dogPhoto = 'https://www.petmd.com/sites/default/files/akitadog.jpg'
    }
    if(randomSingleDog == 'Chihuahua'){
      this.dogPhoto = 'https://s36700.pcdn.co/wp-content/uploads/2015/05/shutterstock_1741426311.jpg.optimal.jpg'
    }
    if(randomSingleDog == 'Poodle'){
      this.dogPhoto = 'https://a-z-animals.com/media/Poodle-Canis-familiaris-white.jpg'
    }
    if(randomSingleDog == 'Golden Retriever'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/22133125/Golden-Retriever-standing-outdoors.jpg'
    }
    if(randomSingleDog == 'Doberman Pinscher'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg'
    }
    if(randomSingleDog == 'Mastiff'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/15141849/Mastiff-standing-outdoors.jpg'
    }
    if(randomSingleDog == 'Vizsla'){
      this.dogPhoto = 'https://vetstreet.brightspotcdn.com/dims4/default/1508cec/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F19%2F951e90a80911e0a0d50050568d634f%2Ffile%2FVizsla-4-645mk062911.jpg'
    }
    if(randomSingleDog == 'Maltese'){
      this.dogPhoto = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F05%2F04%2Fmaltese-grass-looking-at-camera-128369494-2000.jpg'
    }
    if(randomSingleDog == 'Papillon'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13114457/Papillon-laying-in-the-grass-outdoors.20200513145032873.jpg'
    }
    if(randomSingleDog == 'Great Dane'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232605/Great-Dane-On-White-01.jpg'
    }
    if(randomSingleDog == 'Yorkshire terrier'){
      this.dogPhoto = 'https://highlandcanine.com/wp-content/uploads/2021/05/yorkshire-terrier-sitting-on-decking.jpg'
    }
    if(randomSingleDog == 'Greyhound'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03144628/Greyhound-running.jpg'
    }
    if(randomSingleDog == 'Norfolk terrier'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/15104735/Norfolk-Terrier-sitting-in-the-grass.1.jpg'
    }
    if(randomSingleDog == 'Dalmatian'){
      this.dogPhoto = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Dalmatiner_2.jpg'
    }
    if(randomSingleDog == 'Belgian Malinois'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/29203834/Belgian-Malinois.1.jpg'
    }
    if(randomSingleDog == 'Russell Terrier'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13124649/Parson-Russell-Terrier-laying-down-indoors.jpg'
    }
    if(randomSingleDog == 'Siberian Husky'){
      this.dogPhoto = 'https://www.loveyourdog.com/wp-content/uploads/2020/04/Siberian-Husky-in-Snow-900x500.jpg'
    }
    if(randomSingleDog == 'Australian Shepherd'){
      this.dogPhoto = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F15%2Fmerle-australian-shepherd_1011336643-2000.jpg'
    }
    if(randomSingleDog == 'Dachshund'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07143601/Dachshund-laying-down-in-the-grass.jpg'
    }
    if(randomSingleDog == 'Scottish Terrier'){
      this.dogPhoto = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scottish-terrier-royalty-free-image-1588578796.jpg?crop=0.712xw:1.00xh;0.0864xw,0&resize=640:*'
    }
    if(randomSingleDog == 'Cocker Spaniel'){
      this.dogPhoto = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/16105011/English-Cocker-Spaniel-Slide03.jpg'
    }
    if(randomSingleDog == 'Basset Hound'){
      this.dogPhoto = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F07%2F06%2Fbasset-hound-sitting-on-sidewalk-271176049-2000.jpg'
    }
  }


}
