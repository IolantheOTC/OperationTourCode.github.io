(function(exports) { 
    const TourCodesURLRoot = 'https://raw.githubusercontent.com/TheNumberMan/OperationTourCode/master/';
    const MashupsPathExtension = 'mashups/';
    const OfficialPathExtension = MashupsPathExtension + 'official/';
    const OtherPathExtension = MashupsPathExtension + 'other/';
    const MetadataPathExtension = 'metadata/';
    const ListFName = 'list.txt';
    const SpotlightNamesFName = 'spotlightnames.txt';
    const TourExt = '.tour';
    exports.TourExt = TourExt;

    const MashupsURLRoot = TourCodesURLRoot + MashupsPathExtension;
    const MashupsMetadataURLRoot = MashupsURLRoot + MetadataPathExtension;
    const SpotlightNamesURL = MashupsMetadataURLRoot + SpotlightNamesFName;
    const OfficialURLRoot = MashupsURLRoot + OfficialPathExtension;
    const OfficialMetadataURLRoot = OfficialURLRoot + MetadataPathExtension;
    const OfficialListURL = OfficialMetadataURLRoot + ListFName;
    const OtherURLRoot = MashupsURLRoot + OtherPathExtension;
    const OtherMetadataURLRoot = OtherURLRoot + MetadataPathExtension;
    const OtherListURL = OtherMetadataURLRoot + ListFName;

    const NotFoundErrorText = '404: Not Found';

    const TourNameLinePrefix = '/tour name ';
    exports.TourNameLinePrefix = TourNameLinePrefix;
    const TourCreateLinePrefix = '/tour create ';
    exports.TourCreateLinePrefix = TourCreateLinePrefix;
    const TourNewLinePrefix = '/tour new ';
    exports.TourNewLinePrefix = TourNewLinePrefix;
    const TourRulesLinePrefix = '/tour rules ';
    exports.TourRulesLinePrefix = TourRulesLinePrefix;
    const TourRulesetLinePrefix = '/tour ruleset ';
    exports.TourRulesetLinePrefix = TourRulesetLinePrefix;
    const InlineNameSeparator = ',,,';
    exports.InlineNameSeparator = InlineNameSeparator;

    const eMashupCategory = {
        'Official':0,
        'Other':1,

        'Count':2,

        'Undefined':-1
    };
    Object.freeze(eMashupCategory);
    exports.eMashupCategory = eMashupCategory;

    exports.getMashupCategoryName = function getMashupCategoryName(_eMashupCategory) {
        switch(_eMashupCategory) {
            case eMashupCategory.Official:
                return 'Official Mashups';
            case eMashupCategory.Other:
                return 'Other Mashups';
        }
        return '';
    }

    const CategoryPathExtensionDictionary = {
        0: OfficialPathExtension,
        1: OtherPathExtension,
    };
    exports.CategoryPathExtensionDictionary = CategoryPathExtensionDictionary;

    exports.createCategoriesDictionary = function createCategoriesDictionary() {
        var dict = {};
        //console.log(JSON.stringify(CategoryPathExtensionDictionary));
        for (const key in CategoryPathExtensionDictionary) {
            //console.log(key);
            // Check that the property/key is defined in the object itself, not in parent
            if (!CategoryPathExtensionDictionary.hasOwnProperty(key)) continue;
            //console.log(key, CategoryPathExtensionDictionary[key]);
            let sPathExt = CategoryPathExtensionDictionary[key];
            dict[key] = {};
            dict[key]["ListURL"] = TourCodesURLRoot + sPathExt + MetadataPathExtension + ListFName;
            dict[key]["RootURL"] = TourCodesURLRoot + sPathExt;
        }
        return dict;
    }
})(typeof exports === 'undefined'? this['OTC']={}: exports); 