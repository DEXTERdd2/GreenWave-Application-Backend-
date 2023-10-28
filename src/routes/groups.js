const router = require("express").Router();
const verify = require("../middlewares/Auth");
const creategroup = require("../controllers/Groups/creategroup");
const getgroups = require("../controllers/Groups/getgroups");
const updategroup = require("../controllers/Groups/updategroup");
const getgroupbyid = require("../controllers/Groups/getgroupbyid");
const updatemessages = require("../controllers/Groups/updateMessages");
const upload = require("../middlewares/ImageUploader/ImageUploader");
const uploadmedia = require("../middlewares/MessageMediaUploader/MessageMediaUploader");
const { getGroupMessages } = require("../controllers/Groups/getGroupMessages");
const { groupMessages } = require("../controllers/Groups/groupMessages");
const { addMembers } = require("../controllers/Groups/addMembers");
const { removeMember } = require("../controllers/Groups/removeMember");
const notifyGroup = require("../controllers/notification/NotifyGroup")
router.post("/creategroup", verify, upload.single("groupPic"), creategroup);
router.get("/getgroups", verify, getgroups);
router.patch("/updategroup/:id", updategroup);
router.get("/getgroupbyid/:id", verify, getgroupbyid);
router.post("/saveMedia", uploadmedia.single("media"), updatemessages);
//router.get("/getgroupmessages/:groupId", verify, getGroupMessages);
router.get("/group-messages/:groupId", verify, groupMessages);
router.patch("/add-member/:groupId", verify, addMembers);
router.patch("/remove-member/:groupId", verify, removeMember);
router.post("/notifyGroup", verify, notifyGroup);
module.exports = router;
