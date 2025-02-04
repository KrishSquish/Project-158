AFRAME.registerComponent("comics-posters", {
    init: function () {
      this.placesContainer = this.el;
      this.posters();
    },
    posters: function () {
        const postersRef = [
          {
            id: "stranger-things",
            url: "./assets/thumbnails/strangerthings.jpeg",
          },
          {
            id: "omori",
            url: "./assets/thumbnails/omori.jpeg",
          },
    
          {
            id: "danganronpa",
            url: "./assets/thumbnails/dr.jpeg",
          },
          {
            id: "pokemon",
            url: "./assets/thumbnails/pokemon.jpg",
          },
        ];
        let prevoiusXPosition = -60;

        for (var item of postersRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
          // Border Element
          const borderEl = this.createBorder(position, item.id);
    
          // Thumbnail Element
          const poster = this.createPoster(item);
          borderEl.appendChild(poster);
    
          this.placesContainer.appendChild(borderEl);
        }
    },
    createBorder: function (position, id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id",id);
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width: 22,
        height: 30
      });
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{color:"white"})
      entityEl.setAttribute("cursor-listener", {});

      return entityEl 
    },
    createPoster: function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width: 20,
        height: 28
      });
      entityEl.setAttribute("position",{x:0,y:5,z:0.1})
      entityEl.setAttribute("material",{src:item.url})
      return entityEl 
    }
});