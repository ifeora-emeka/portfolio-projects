import { CurriculumAPIResponse } from "./curriculum.types";
import { LearningTrack } from "./track.types";

export interface TrackDetailsAPIResponse {
    track: LearningTrack;
    curriculum: CurriculumAPIResponse;
}
