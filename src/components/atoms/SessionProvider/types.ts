export interface SessionValueTypes {
  modalOpen: boolean;
}
export interface SessionContextSessionValueTypes {
  session: SessionValueTypes;
  setSession: React.Dispatch<React.SetStateAction<SessionValueTypes>>;
}
