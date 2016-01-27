require 'test_helper'

class JobTagsControllerTest < ActionController::TestCase
  setup do
    @job_tag = job_tags(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:job_tags)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create job_tag" do
    assert_difference('JobTag.count') do
      post :create, job_tag: { job_id: @job_tag.job_id, tag_id: @job_tag.tag_id }
    end

    assert_redirected_to job_tag_path(assigns(:job_tag))
  end

  test "should show job_tag" do
    get :show, id: @job_tag
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @job_tag
    assert_response :success
  end

  test "should update job_tag" do
    patch :update, id: @job_tag, job_tag: { job_id: @job_tag.job_id, tag_id: @job_tag.tag_id }
    assert_redirected_to job_tag_path(assigns(:job_tag))
  end

  test "should destroy job_tag" do
    assert_difference('JobTag.count', -1) do
      delete :destroy, id: @job_tag
    end

    assert_redirected_to job_tags_path
  end
end
