/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const IDEAS_ERROR = 'ideas/Home/IDEAS_ERROR';
export const GET_IDEAS = 'ideas/Home/GET_IDEAS';
export const GET_IDEAS_DONE = 'ideas/Home/GET_IDEAS_DONE';
export const POST_IDEA = 'ideas/Home/POST_IDEA';
export const POST_IDEA_DONE = 'ideas/Home/POST_IDEA_DONE';
export const PUT_IDEA = 'ideas/Home/PUT_IDEA';
export const PUT_IDEA_DONE = 'ideas/Home/PUT_IDEA_DONE';
export const DELETE_IDEA = 'ideas/Home/DELETE_IDEA';
export const DELETE_IDEA_DONE = 'ideas/Home/DELETE_IDEA_DONE';
