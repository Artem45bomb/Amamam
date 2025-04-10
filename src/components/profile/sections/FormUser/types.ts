import { Section } from "../types";
import { UserProfile } from "@/types/user";

export type Props = UserProfile & {
  onChange: (section: Section) => void;
  currentSection: Section;
};
