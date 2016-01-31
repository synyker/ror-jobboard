class JobTagsController < ApplicationController
  before_action :set_job_tag, only: [:show, :edit, :update, :destroy]

  before_filter :authorize, :except => ['index', 'show']

  # GET /job_tags
  # GET /job_tags.json
  def index
    @job_tags = JobTag.all
  end

  # GET /job_tags/1
  # GET /job_tags/1.json
  def show
  end

  # GET /job_tags/new
  def new
    @job_tag = JobTag.new
  end

  # GET /job_tags/1/edit
  def edit
  end

  # POST /job_tags
  # POST /job_tags.json
  def create
    @job_tag = JobTag.new(job_tag_params)

    respond_to do |format|
      if @job_tag.save
        format.html { redirect_to @job_tag, notice: 'Job tag was successfully created.' }
        format.json { render :show, status: :created, location: @job_tag }
      else
        format.html { render :new }
        format.json { render json: @job_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /job_tags/1
  # PATCH/PUT /job_tags/1.json
  def update
    respond_to do |format|
      if @job_tag.update(job_tag_params)
        format.html { redirect_to @job_tag, notice: 'Job tag was successfully updated.' }
        format.json { render :show, status: :ok, location: @job_tag }
      else
        format.html { render :edit }
        format.json { render json: @job_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /job_tags/1
  # DELETE /job_tags/1.json
  def destroy
    @job_tag.destroy
    respond_to do |format|
      format.html { redirect_to job_tags_url, notice: 'Job tag was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job_tag
      @job_tag = JobTag.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def job_tag_params
      params.require(:job_tag).permit(:job_id, :tag_id)
    end
end
