class Job < ActiveRecord::Base
belongs_to :company
has_many :job_tags
has_many :tags, through: :job_tags
end
