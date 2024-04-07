import { Picture } from './picture.js';

const AVATAR_URL =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80';

export const SamplePicture = () => <Picture pictureUrl={AVATAR_URL} />;
