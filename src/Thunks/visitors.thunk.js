import api from '../API';
import { getVisitorsRequest, getVisitorsSuccsess, getVisitorsFailure, createVisitorSuccsess, editVisitorSuccsess, removeVisitorFailure, removeVisitorSuccsess } from '../action';

export const getVisitorsThunk = () => async (dispatch) => {
  try {
    dispatch(getVisitorsRequest());
    const response = await api.visitors.get();
    if (response.status !== 200) {
      throw new Error('Cannot get Visitors')
    }
    dispatch(getVisitorsSuccsess(response.data));
  } catch (error) {
    dispatch(getVisitorsFailure());
  }
}

export const createVisitorThunk = (data) => async (dispatch) => {
  try {
    if (data.id) {
      const response = await api.deleteUpdateVisitor(data.id).put({ ...data })
      if (response.statusText !== "OK") {
        throw new Error('Cannot update Visitor')
      }
      dispatch(editVisitorSuccsess(response.data))
    } else {
      const response = await api.visitors.post({
        ...data
      });
      dispatch(createVisitorSuccsess(response.data))
      dispatch(getVisitorsThunk())
      if (response.statusText !== "OK") {
        throw new Error('Cannot create Visitor')
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const removeVisitorThunk = (id) => async (dispatch) => {
  try {
    await api.deleteUpdateVisitor(id).delete();
    dispatch(removeVisitorSuccsess(id))
    dispatch(getVisitorsThunk())
  } catch (error) {
    dispatch(removeVisitorFailure());
  }
}