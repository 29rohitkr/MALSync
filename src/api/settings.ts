export var settingsObj = {
  options: {
    autoTracking: true,
    userscriptMode: false,
    delay: 0,
    malTags: true,
    malResume: true,
    epPredictions: true,

    posLeft: 'left',
    miniMALonMal: false,
    displayFloatButton: true,
    outWay: true,
    miniMalWidth: '30%',
    miniMalHeight: '90%',
    malThumbnail: 100,

    '9anime': true,
    Crunchyroll: true,
    Gogoanime: true,
    Kissanime: true,
    Masterani: true,
    Animeheaven: true,
    Anime4you: true,
    Kissmanga: true,
    Mangadex: true,

    updateCheckNotifications: true,
  },

  init: async function (){
    return new Promise(async (resolve, reject) => {
      for (var key in this.options) {
        var store = await api.storage.get('settings/'+key);
        if(typeof store != 'undefined'){
          this.options[key] = store;
        }
      }
      con.log('Settings', this.options);
      resolve(this);
    });
  },

  get: function(name: string){
    return this.options[name];
  },

  set: function(name: string, value: any){
    if(this.options.hasOwnProperty(name)){
      this.options[name] = value;
      api.storage.set('settings/'+name, value);
    }else{
      con.error(name+' is not a defined option');
    }
  }

}
