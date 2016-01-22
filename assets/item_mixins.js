Game.ItemMixin = {};

Game.ItemMixin.Usable = {
  META: {
    mixinName: "Usable",
    mixinGroup: "Usage",
    stateNamespace: "_Usable_attr",
    stateModel: {
      use: function(ent){
        return;
      }
    },
    init: function(template){
      this.attr._Usable_attr.use = template.use || this.attr._Usable_attr.use;
    }
  }
};

Game.ItemMixin.Equippable = {
  META: {
    mixinName: "Equippable",
    mixinGroup: "Usage",
    stateNamespace: "_Equippable_attr",
    stateModel: {
      _slot: '',
    },
    init: function(template){
      this.attr._Equippable_attr._slot = template.slot || 'na';
    }
  }
};
