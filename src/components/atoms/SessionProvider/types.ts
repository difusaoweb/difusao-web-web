export interface SessionValueTypes {
  modal: string;
}
export interface SessionContextSessionValueTypes {
  session: SessionValueTypes;
  setSession: React.Dispatch<React.SetStateAction<SessionValueTypes>>;
}
