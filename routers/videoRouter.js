import express from "express";
import routes from "../routes";
import {
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, upload);
videoRouter.get(routes.video_detail, videoDetail);
videoRouter.get(routes.edit_video, editVideo);
videoRouter.get(routes.delete_video, deleteVideo);

export default videoRouter;
