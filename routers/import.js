var router = require('express').Router();
var models = require('../models');
const excelToJson = require('convert-excel-to-json');

router.get("/importCountryFromExcel",async (req,res)=>{
    const obj={
        country_name: "India",
    }
    models.country.create(obj)
    .then(function(result){
        console.log("Successfully added the details!!");
    }).catch(error => {
        console.log("Error!! Details not added");
    });
});


router.get("/importStateFromExcel",async (req,res)=>{
    const result = excelToJson({
        sourceFile: 'sample.xlsx'
    });
    // console.log(result.Location);
    const array = result.s;
    for(var i=0;i<array.length;i++){
        const state= await models.state.findOne({where:{"state_name":array[i].E}});
        if(state){
            console.log("State already present in database");
            // break;
        }
        else{
            const obj={
                "state_name": array[i].E,
                "countryId": 1
            }
            const new_state= await models.state.create(obj);
            new_state.save();
            console.log("Successfully filled the details!!");
            // break;
        }
    }
    console.log("All entries in excel sheet has been added to database");
    // return res.status(200).json({
    //     "status": "Success",
    //     "message": "All entries in excel sheet has been added to database"
    // });
});

router.get("/importDistrictFromExcel",async (req,res)=>{
    const result = excelToJson({
        sourceFile: 'sample.xlsx'
    });
    // console.log(result.Location);
    const array = result.s;
    for(var i=0;i<array.length;i++){
        const district= await models.district.findOne({where:{"district_name":array[i].D}});
        if(district){
            console.log("District already present in database");
            // break;
        }
        else{
            const state= await models.state.findOne({where:{"state_name":array[i].E}});
            const obj={
                "district_name": array[i].D,
                "stateId": state.state_id,
                "countryId": 1
            }
            const new_district= await models.district.create(obj);
            new_district.save();
            console.log("Successfully filled the details!!");
            // break;
        }
    }
    console.log("All entries in excel sheet has been added to database");
    // return res.status(200).json({
    //     "status": "Success",
    //     "message": "All entries in excel sheet has been added to database"
    // });
});

router.get("/importTalukaFromExcel",async (req,res)=>{
    const result = excelToJson({
        sourceFile: 'sample.xlsx'
    });
    // console.log(result.Location);
    const array = result.s;
    for(var i=0;i<array.length;i++){
        const taluka= await models.taluka.findOne({where:{"taluka_name":array[i].C}});
        if(taluka){
            console.log("Taluka already present in database");
            // break;
        }
        else{
            const district= await models.district.findOne({where:{"district_name":array[i].D}});
            const state= await models.state.findOne({where:{"state_name":array[i].E}});
            const obj={
                "taluka_name": array[i].C,
                "districtId": district.district_id,
                "stateId": state.state_id,
                "countryId": 1
            }
            const new_taluka= await models.taluka.create(obj);
            new_taluka.save();
            console.log("Successfully filled the details!!");
            // break;
        }
    }
    console.log("All entries in excel sheet has been added to database");
    // return res.status(200).json({
    //     "status": "Success",
    //     "message": "All entries in excel sheet has been added to database"
    // });
});


router.get("/importAreaFromExcel",async (req,res)=>{
    const result = excelToJson({
        sourceFile: 'sample.xlsx'
    });
    // console.log(result.Location);
    const array = result.s;
    for(var i=0;i<array.length;i++){
        const area= await models.area.findOne({where:{"area_name":array[i].A}});
        if(area){
            console.log("Area already present in database");
            // break;
        }
        else{
            const taluka= await models.taluka.findOne({where:{"taluka_name":array[i].C}});
            const district= await models.district.findOne({where:{"district_name":array[i].D}});
            const state= await models.state.findOne({where:{"state_name":array[i].E}});
            const obj={
                "area_name": array[i].A,
                "pincode": array[i].B,
                "talukaId": taluka.taluka_id,
                "districtId": district.district_id,
                "stateId": state.state_id,
                "countryId": 1
            }
            const new_area= await models.area.create(obj);
            new_area.save();
            console.log("Successfully filled the details!!");
            // break;
        }
    }
    console.log("All entries in excel sheet has been added to database");
    // return res.status(200).json({
    //     "status": "Success",
    //     "message": "All entries in excel sheet has been added to database"
    // });
});

router.get("/importPinCodeFromExcel",async (req,res)=>{
    const result = excelToJson({
        sourceFile: 'sample.xlsx'
    });
    // console.log(result.Location);
    const array = result.s;
    for(var i=0;i<array.length;i++){
        const pincode= await models.pincode.findOne({where:{"pincode_no":array[i].B}});
        if(pincode){
            console.log("Pincode already present in database");
            // break;
        }
        else{
            const area= await models.area.findOne({where:{"area_name":array[i].A}});
            const taluka= await models.taluka.findOne({where:{"taluka_name":array[i].C}});
            const district= await models.district.findOne({where:{"district_name":array[i].D}});
            const state= await models.state.findOne({where:{"state_name":array[i].E}});
            const obj={
                "pincode_no": array[i].B,
                "areaId": area.area_id,
                "talukaId": taluka.taluka_id,
                "districtId": district.district_id,
                "stateId": state.state_id,
                "countryId": 1
            }
            const new_pincode_no= await models.pincode.create(obj);
            new_pincode_no.save();
            console.log("Successfully filled the details!!");
            // break;
        }
    }
    console.log("All entries in excel sheet has been added to database");
    // return res.status(200).json({
    //     "status": "Success",
    //     "message": "All entries in excel sheet has been added to database"
    // });
});


module.exports = router;