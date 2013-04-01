module ApplicationHelper

  def show_flash
    html = ""
    flash_types = ["notice", "warning", "error"]
    flash_types.each do |type|
      f = flash[type.intern]
      unless f.blank?
        html = content_tag(:div, f.to_s, :class => "flash flash_#{type}")
      end
    end
    html
  end

end
