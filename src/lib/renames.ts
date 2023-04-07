export enum RenameType {
  ENUM = "enum",
  GD_FUNCTIONS = "gd_functions",
  CS_FUNCTIONS = "cs_functions",
  GD_PROPERTIES = "gd_properties",
  CS_PROPERTIES = "cs_properties",
  GD_SIGNALS = "gd_signals",
  CS_SIGNALS = "cs_signals",
  PROJECT_SETTINGS = "project_settings",
  PROJECT_GODOT = "project_godot",
  INPUT_MAP = "input_map",
  BUILTIN_TYPES = "builtin_types",
  SHADERS = "shaders",
  CLASSES = "classes",
  COLORS = "colors",
  THEME_OVERRIDES = "theme_overrides",
}

export type Rename = {
  from: string;
  to: string;
  type: RenameType;
};

export const RENAMES: Readonly<Rename[]> = Object.freeze([
  {
    from: "BUTTON_LEFT",
    to: "MOUSE_BUTTON_LEFT",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_MASK_LEFT",
    to: "MOUSE_BUTTON_MASK_LEFT",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_MASK_MIDDLE",
    to: "MOUSE_BUTTON_MASK_MIDDLE",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_MASK_RIGHT",
    to: "MOUSE_BUTTON_MASK_RIGHT",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_MASK_XBUTTON1",
    to: "MOUSE_BUTTON_MASK_XBUTTON1",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_MASK_XBUTTON2",
    to: "MOUSE_BUTTON_MASK_XBUTTON2",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_MIDDLE",
    to: "MOUSE_BUTTON_MIDDLE",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_RIGHT",
    to: "MOUSE_BUTTON_RIGHT",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_WHEEL_DOWN",
    to: "MOUSE_BUTTON_WHEEL_DOWN",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_WHEEL_LEFT",
    to: "MOUSE_BUTTON_WHEEL_LEFT",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_WHEEL_RIGHT",
    to: "MOUSE_BUTTON_WHEEL_RIGHT",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_WHEEL_UP",
    to: "MOUSE_BUTTON_WHEEL_UP",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_XBUTTON1",
    to: "MOUSE_BUTTON_XBUTTON1",
    type: RenameType.ENUM,
  },
  {
    from: "BUTTON_XBUTTON2",
    to: "MOUSE_BUTTON_XBUTTON2",
    type: RenameType.ENUM,
  },
  {
    from: "KEY_CONTROL",
    to: "KEY_CTRL",
    type: RenameType.ENUM,
  },
  {
    from: "SIDE_BOTTOM",
    to: "MARGIN_BOTTOM",
    type: RenameType.ENUM,
  },
  {
    from: "SIDE_LEFT",
    to: "MARGIN_LEFT",
    type: RenameType.ENUM,
  },
  {
    from: "SIDE_RIGHT",
    to: "MARGIN_RIGHT",
    type: RenameType.ENUM,
  },
  {
    from: "SIDE_TOP",
    to: "MARGIN_TOP",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_COLOR_ARRAY",
    to: "TYPE_PACKED_COLOR_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_FLOAT64_ARRAY",
    to: "TYPE_PACKED_FLOAT64_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_INT64_ARRAY",
    to: "TYPE_PACKED_INT64_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_INT_ARRAY",
    to: "TYPE_PACKED_INT32_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_QUAT",
    to: "TYPE_QUATERNION",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_RAW_ARRAY",
    to: "TYPE_PACKED_BYTE_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_REAL",
    to: "TYPE_FLOAT",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_REAL_ARRAY",
    to: "TYPE_PACKED_FLOAT32_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_STRING_ARRAY",
    to: "TYPE_PACKED_STRING_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_TRANSFORM",
    to: "TYPE_TRANSFORM3D",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_VECTOR2_ARRAY",
    to: "TYPE_PACKED_VECTOR2_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_VECTOR3_ARRAY",
    to: "TYPE_PACKED_VECTOR3_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "FLAG_MAX",
    to: "PARTICLE_FLAG_MAX",
    type: RenameType.ENUM,
  },
  {
    from: "ALIGN_BEGIN",
    to: "ALIGNMENT_BEGIN",
    type: RenameType.ENUM,
  },
  {
    from: "ALIGN_CENTER",
    to: "ALIGNMENT_CENTER",
    type: RenameType.ENUM,
  },
  {
    from: "ALIGN_END",
    to: "ALIGNMENT_END",
    type: RenameType.ENUM,
  },
  {
    from: "ARRAY_COMPRESS_BASE",
    to: "ARRAY_COMPRESS_FLAGS_BASE",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_AR",
    to: "XR_AR",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_EXCESSIVE_MOTION",
    to: "XR_EXCESSIVE_MOTION",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_EXTERNAL",
    to: "XR_EXTERNAL",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_INSUFFICIENT_FEATURES",
    to: "XR_INSUFFICIENT_FEATURES",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_MONO",
    to: "XR_MONO",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_NONE",
    to: "XR_NONE",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_NORMAL_TRACKING",
    to: "XR_NORMAL_TRACKING",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_NOT_TRACKING",
    to: "XR_NOT_TRACKING",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_STEREO",
    to: "XR_STEREO",
    type: RenameType.ENUM,
  },
  {
    from: "ARVR_UNKNOWN_TRACKING",
    to: "XR_UNKNOWN_TRACKING",
    type: RenameType.ENUM,
  },
  {
    from: "BAKE_ERROR_INVALID_MESH",
    to: "BAKE_ERROR_MESHES_INVALID",
    type: RenameType.ENUM,
  },
  {
    from: "BODY_MODE_CHARACTER",
    to: "BODY_MODE_RIGID_LINEAR",
    type: RenameType.ENUM,
  },
  {
    from: "CLEAR_MODE_ONLY_NEXT_FRAME",
    to: "CLEAR_MODE_ONCE",
    type: RenameType.ENUM,
  },
  {
    from: "COMPRESS_PVRTC4",
    to: "COMPRESS_PVRTC1_4",
    type: RenameType.ENUM,
  },
  {
    from: "CONNECT_ONESHOT",
    to: "CONNECT_ONE_SHOT",
    type: RenameType.ENUM,
  },
  {
    from: "CONTAINER_PROPERTY_EDITOR_BOTTOM",
    to: "CONTAINER_INSPECTOR_BOTTOM",
    type: RenameType.ENUM,
  },
  {
    from: "CUBEMAP_BACK",
    to: "CUBEMAP_LAYER_BACK",
    type: RenameType.ENUM,
  },
  {
    from: "CUBEMAP_BOTTOM",
    to: "CUBEMAP_LAYER_BOTTOM",
    type: RenameType.ENUM,
  },
  {
    from: "CUBEMAP_FRONT",
    to: "CUBEMAP_LAYER_FRONT",
    type: RenameType.ENUM,
  },
  {
    from: "CUBEMAP_LEFT",
    to: "CUBEMAP_LAYER_LEFT",
    type: RenameType.ENUM,
  },
  {
    from: "CUBEMAP_RIGHT",
    to: "CUBEMAP_LAYER_RIGHT",
    type: RenameType.ENUM,
  },
  {
    from: "CUBEMAP_TOP",
    to: "CUBEMAP_LAYER_TOP",
    type: RenameType.ENUM,
  },
  {
    from: "DAMPED_STRING_DAMPING",
    to: "DAMPED_SPRING_DAMPING",
    type: RenameType.ENUM,
  },
  {
    from: "DAMPED_STRING_REST_LENGTH",
    to: "DAMPED_SPRING_REST_LENGTH",
    type: RenameType.ENUM,
  },
  {
    from: "DAMPED_STRING_STIFFNESS",
    to: "DAMPED_SPRING_STIFFNESS",
    type: RenameType.ENUM,
  },
  {
    from: "FLAG_ALIGN_Y_TO_VELOCITY",
    to: "PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY",
    type: RenameType.ENUM,
  },
  {
    from: "FLAG_DISABLE_Z",
    to: "PARTICLE_FLAG_DISABLE_Z",
    type: RenameType.ENUM,
  },
  {
    from: "FLAG_ROTATE_Y",
    to: "PARTICLE_FLAG_ROTATE_Y",
    type: RenameType.ENUM,
  },
  {
    from: "FLAG_USE_BAKED_LIGHT",
    to: "GI_MODE_BAKED",
    type: RenameType.ENUM,
  },
  {
    from: "FORMAT_PVRTC2",
    to: "FORMAT_PVRTC1_2",
    type: RenameType.ENUM,
  },
  {
    from: "FORMAT_PVRTC2A",
    to: "FORMAT_PVRTC1_2A",
    type: RenameType.ENUM,
  },
  {
    from: "FORMAT_PVRTC4",
    to: "FORMAT_PVRTC1_4",
    type: RenameType.ENUM,
  },
  {
    from: "FORMAT_PVRTC4A",
    to: "FORMAT_PVRTC1_4A",
    type: RenameType.ENUM,
  },
  {
    from: "FUNC_FRAC",
    to: "FUNC_FRACT",
    type: RenameType.ENUM,
  },
  {
    from: "INSTANCE_LIGHTMAP_CAPTURE",
    to: "INSTANCE_LIGHTMAP",
    type: RenameType.ENUM,
  },
  {
    from: "JOINT_6DOF",
    to: "JOINT_TYPE_6DOF",
    type: RenameType.ENUM,
  },
  {
    from: "JOINT_CONE_TWIST",
    to: "JOINT_TYPE_CONE_TWIST",
    type: RenameType.ENUM,
  },
  {
    from: "JOINT_DAMPED_SPRING",
    to: "JOINT_TYPE_DAMPED_SPRING",
    type: RenameType.ENUM,
  },
  {
    from: "JOINT_GROOVE",
    to: "JOINT_TYPE_GROOVE",
    type: RenameType.ENUM,
  },
  {
    from: "JOINT_HINGE",
    to: "JOINT_TYPE_HINGE",
    type: RenameType.ENUM,
  },
  {
    from: "JOINT_PIN",
    to: "JOINT_TYPE_PIN",
    type: RenameType.ENUM,
  },
  {
    from: "JOINT_SLIDER",
    to: "JOINT_TYPE_SLIDER",
    type: RenameType.ENUM,
  },
  {
    from: "LOOP_PING_PONG",
    to: "LOOP_PINGPONG",
    type: RenameType.ENUM,
  },
  {
    from: "MODE_KINEMATIC",
    to: "FREEZE_MODE_KINEMATIC",
    type: RenameType.ENUM,
  },
  {
    from: "MODE_OPEN_ANY",
    to: "FILE_MODE_OPEN_ANY",
    type: RenameType.ENUM,
  },
  {
    from: "MODE_OPEN_DIR",
    to: "FILE_MODE_OPEN_DIR",
    type: RenameType.ENUM,
  },
  {
    from: "MODE_OPEN_FILE",
    to: "FILE_MODE_OPEN_FILE",
    type: RenameType.ENUM,
  },
  {
    from: "MODE_OPEN_FILES",
    to: "FILE_MODE_OPEN_FILES",
    type: RenameType.ENUM,
  },
  {
    from: "MODE_SAVE_FILE",
    to: "FILE_MODE_SAVE_FILE",
    type: RenameType.ENUM,
  },
  {
    from: "MODE_STATIC",
    to: "FREEZE_MODE_STATIC",
    type: RenameType.ENUM,
  },
  {
    from: "NOTIFICATION_APP_PAUSED",
    to: "NOTIFICATION_APPLICATION_PAUSED",
    type: RenameType.ENUM,
  },
  {
    from: "NOTIFICATION_APP_RESUMED",
    to: "NOTIFICATION_APPLICATION_RESUMED",
    type: RenameType.ENUM,
  },
  {
    from: "NOTIFICATION_INSTANCED",
    to: "NOTIFICATION_SCENE_INSTANTIATED",
    type: RenameType.ENUM,
  },
  {
    from: "NOTIFICATION_PATH_CHANGED",
    to: "NOTIFICATION_PATH_RENAMED",
    type: RenameType.ENUM,
  },
  {
    from: "NOTIFICATION_WM_FOCUS_IN",
    to: "NOTIFICATION_APPLICATION_FOCUS_IN",
    type: RenameType.ENUM,
  },
  {
    from: "NOTIFICATION_WM_FOCUS_OUT",
    to: "NOTIFICATION_APPLICATION_FOCUS_OUT",
    type: RenameType.ENUM,
  },
  {
    from: "NOTIFICATION_WM_UNFOCUS_REQUEST",
    to: "NOTIFICATION_WM_WINDOW_FOCUS_OUT",
    type: RenameType.ENUM,
  },
  {
    from: "PAUSE_MODE_INHERIT",
    to: "PROCESS_MODE_INHERIT",
    type: RenameType.ENUM,
  },
  {
    from: "PAUSE_MODE_PROCESS",
    to: "PROCESS_MODE_ALWAYS",
    type: RenameType.ENUM,
  },
  {
    from: "PAUSE_MODE_STOP",
    to: "PROCESS_MODE_PAUSABLE",
    type: RenameType.ENUM,
  },
  {
    from: "RENDER_DRAW_CALLS_IN_FRAME",
    to: "RENDER_TOTAL_DRAW_CALLS_IN_FRAME",
    type: RenameType.ENUM,
  },
  {
    from: "RENDER_OBJECTS_IN_FRAME",
    to: "RENDER_TOTAL_OBJECTS_IN_FRAME",
    type: RenameType.ENUM,
  },
  {
    from: "SOURCE_GEOMETRY_NAVMESH_CHILDREN",
    to: "SOURCE_GEOMETRY_ROOT_NODE_CHILDREN",
    type: RenameType.ENUM,
  },
  {
    from: "TEXTURE_TYPE_2D_ARRAY",
    to: "TEXTURE_LAYERED_2D_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TEXTURE_TYPE_CUBEMAP",
    to: "TEXTURE_LAYERED_CUBEMAP_ARRAY",
    type: RenameType.ENUM,
  },
  {
    from: "TRACKER_LEFT_HAND",
    to: "TRACKER_HAND_LEFT",
    type: RenameType.ENUM,
  },
  {
    from: "TRACKER_RIGHT_HAND",
    to: "TRACKER_HAND_RIGHT",
    type: RenameType.ENUM,
  },
  {
    from: "TYPE_NORMALMAP",
    to: "TYPE_NORMAL_MAP",
    type: RenameType.ENUM,
  },
  {
    from: "AlignMode",
    to: "AlignmentMode",
    type: RenameType.ENUM,
  },
  {
    from: "AnimationProcessMode",
    to: "AnimationProcessCallback",
    type: RenameType.ENUM,
  },
  {
    from: "Camera2DProcessMode",
    to: "Camera2DProcessCallback",
    type: RenameType.ENUM,
  },
  {
    from: "CubeMapSide",
    to: "CubeMapLayer",
    type: RenameType.ENUM,
  },
  {
    from: "DampedStringParam",
    to: "DampedSpringParam",
    type: RenameType.ENUM,
  },
  {
    from: "FFT_Size",
    to: "FFTSize",
    type: RenameType.ENUM,
  },
  {
    from: "PauseMode",
    to: "ProcessMode",
    type: RenameType.ENUM,
  },
  {
    from: "TimerProcessMode",
    to: "TimerProcessCallback",
    type: RenameType.ENUM,
  },
  {
    from: "Tracking_status",
    to: "TrackingStatus",
    type: RenameType.ENUM,
  },
  {
    from: "_about_to_show",
    to: "_about_to_popup",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "_get_configuration_warning",
    to: "_get_configuration_warnings",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "_set_current",
    to: "set_current",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "_set_editor_description",
    to: "set_editor_description",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "_toplevel_raise_self",
    to: "_top_level_raise_self",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "_update_wrap_at",
    to: "_update_wrap_at_column",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_animation",
    to: "add_animation_library",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_cancel",
    to: "add_cancel_button",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_central_force",
    to: "apply_central_force",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_child_below_node",
    to: "add_sibling",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_color_override",
    to: "add_theme_color_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_constant_override",
    to: "add_theme_constant_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_font_override",
    to: "add_theme_font_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_force",
    to: "apply_force",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_icon_override",
    to: "add_theme_icon_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_scene_import_plugin",
    to: "add_scene_format_importer_plugin",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_spatial_gizmo_plugin",
    to: "add_node_3d_gizmo_plugin",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_stylebox_override",
    to: "add_theme_stylebox_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "add_torque",
    to: "apply_torque",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "agent_set_neighbor_dist",
    to: "agent_set_neighbor_distance",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "apply_changes",
    to: "_apply_changes",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "body_add_force",
    to: "body_apply_force",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "body_add_torque",
    to: "body_apply_torque",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "bumpmap_to_normalmap",
    to: "bump_map_to_normal_map",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "can_be_hidden",
    to: "_can_be_hidden",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "can_drop_data",
    to: "_can_drop_data",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "can_generate_small_preview",
    to: "_can_generate_small_preview",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "can_instance",
    to: "can_instantiate",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "canvas_light_set_scale",
    to: "canvas_light_set_texture_scale",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "capture_get_device",
    to: "get_input_device",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "capture_get_device_list",
    to: "get_input_device_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "capture_set_device",
    to: "set_input_device",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "center_viewport_to_cursor",
    to: "center_viewport_to_caret",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "change_scene",
    to: "change_scene_to_file",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "change_scene_to",
    to: "change_scene_to_packed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "clip_polygons_2d",
    to: "clip_polygons",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "clip_polyline_with_polygon_2d",
    to: "clip_polyline_with_polygon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "commit_handle",
    to: "_commit_handle",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "convex_hull_2d",
    to: "convex_hull",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "create_gizmo",
    to: "_create_gizmo",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "cursor_get_blink_speed",
    to: "get_caret_blink_interval",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "cursor_get_column",
    to: "get_caret_column",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "cursor_get_line",
    to: "get_caret_line",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "cursor_set_blink_enabled",
    to: "set_caret_blink_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "cursor_set_blink_speed",
    to: "set_caret_blink_interval",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "cursor_set_column",
    to: "set_caret_column",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "cursor_set_line",
    to: "set_caret_line",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "damped_spring_joint_create",
    to: "joint_make_damped_spring",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "damped_string_joint_get_param",
    to: "damped_spring_joint_get_param",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "damped_string_joint_set_param",
    to: "damped_spring_joint_set_param",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "dectime",
    to: "move_toward",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "delete_char_at_cursor",
    to: "delete_char_at_caret",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "deselect_items",
    to: "deselect_all",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "disable_plugin",
    to: "_disable_plugin",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "drop_data",
    to: "_drop_data",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "exclude_polygons_2d",
    to: "exclude_polygons",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "find_node",
    to: "find_child",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "find_scancode_from_string",
    to: "find_keycode_from_string",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "forward_canvas_draw_over_viewport",
    to: "_forward_canvas_draw_over_viewport",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "forward_canvas_force_draw_over_viewport",
    to: "_forward_canvas_force_draw_over_viewport",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "forward_canvas_gui_input",
    to: "_forward_canvas_gui_input",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "forward_spatial_draw_over_viewport",
    to: "_forward_3d_draw_over_viewport",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "forward_spatial_force_draw_over_viewport",
    to: "_forward_3d_force_draw_over_viewport",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "forward_spatial_gui_input",
    to: "_forward_3d_gui_input",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "generate_from_path",
    to: "_generate_from_path",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "generate_small_preview_automatically",
    to: "_generate_small_preview_automatically",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_action_list",
    to: "action_get_events",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_alt",
    to: "is_alt_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_animation_process_mode",
    to: "get_process_callback",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_applied_force",
    to: "get_constant_force",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_applied_torque",
    to: "get_constant_torque",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_audio_bus",
    to: "get_audio_bus_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_bound_child_nodes_to_bone",
    to: "get_bone_children",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_camera",
    to: "get_camera_3d",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_cancel",
    to: "get_cancel_button",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_caption",
    to: "_get_caption",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_cast_to",
    to: "get_target_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_child_by_name",
    to: "_get_child_by_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_child_nodes",
    to: "_get_child_nodes",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_closest_point_to_segment_2d",
    to: "get_closest_point_to_segment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_closest_point_to_segment_uncapped_2d",
    to: "get_closest_point_to_segment_uncapped",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_closest_points_between_segments_2d",
    to: "get_closest_point_to_segment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_collision_layer_bit",
    to: "get_collision_layer_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_collision_mask_bit",
    to: "get_collision_mask_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_color_types",
    to: "get_color_type_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_command",
    to: "is_command_or_control_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_constant_types",
    to: "get_constant_type_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_control",
    to: "is_ctrl_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_cull_mask_bit",
    to: "get_cull_mask_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_cursor_position",
    to: "get_caret_column",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_d",
    to: "get_distance",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_default_length",
    to: "get_length",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_depth_bias_enable",
    to: "get_depth_bias_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_device",
    to: "get_output_device",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_device_list",
    to: "get_output_device_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_drag_data",
    to: "_get_drag_data",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_editor_viewport",
    to: "get_editor_main_screen",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_enabled_focus_mode",
    to: "get_focus_mode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_endian_swap",
    to: "is_big_endian",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_error_string",
    to: "get_error_message",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_filename",
    to: "get_scene_file_path",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_final_location",
    to: "get_final_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_focus_neighbour",
    to: "get_focus_neighbor",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_follow_smoothing",
    to: "get_position_smoothing_speed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_font_types",
    to: "get_font_type_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_frame_color",
    to: "get_color",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_global_rate_scale",
    to: "get_playback_speed_scale",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_gravity_distance_scale",
    to: "get_gravity_point_unit_distance",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_gravity_vector",
    to: "get_gravity_direction",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_h_scrollbar",
    to: "get_h_scroll_bar",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_hand",
    to: "get_tracker_hand",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_handle_name",
    to: "_get_handle_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_handle_value",
    to: "_get_handle_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_icon_align",
    to: "get_icon_alignment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_icon_types",
    to: "get_icon_type_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_idle_frames",
    to: "get_process_frames",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_import_options",
    to: "_get_import_options",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_import_order",
    to: "_get_import_order",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_importer_name",
    to: "_get_importer_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_interior_ambient",
    to: "get_ambient_color",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_interior_ambient_energy",
    to: "get_ambient_color_energy",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_item_navmesh",
    to: "get_item_navigation_mesh",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_item_navmesh_transform",
    to: "get_item_navigation_mesh_transform",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_iterations_per_second",
    to: "get_physics_ticks_per_second",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_last_mouse_speed",
    to: "get_last_mouse_velocity",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_layer_mask_bit",
    to: "get_layer_mask_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_len",
    to: "get_length",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_max_atlas_size",
    to: "get_max_texture_size",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_metakey",
    to: "is_meta_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_mid_height",
    to: "get_height",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_motion_remainder",
    to: "get_remainder",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_nav_path",
    to: "get_current_navigation_path",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_nav_path_index",
    to: "get_current_navigation_path_index",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_neighbor_dist",
    to: "get_neighbor_distance",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_network_connected_peers",
    to: "get_peers",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_network_master",
    to: "get_multiplayer_authority",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_network_peer",
    to: "get_multiplayer_peer",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_network_unique_id",
    to: "get_unique_id",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_next_location",
    to: "get_next_path_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_ok",
    to: "get_ok_button",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_oneshot",
    to: "get_one_shot",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_option_visibility",
    to: "_get_option_visibility",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_parameter_default_value",
    to: "_get_parameter_default_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_parameter_list",
    to: "_get_parameter_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_parent_spatial",
    to: "get_parent_node_3d",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_pause_mode",
    to: "get_process_mode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_physical_scancode",
    to: "get_physical_keycode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_physical_scancode_with_modifiers",
    to: "get_physical_keycode_with_modifiers",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_plugin_icon",
    to: "_get_plugin_icon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_plugin_name",
    to: "_get_plugin_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_preset_count",
    to: "_get_preset_count",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_preset_name",
    to: "_get_preset_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_recognized_extensions",
    to: "_get_recognized_extensions",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_render_info",
    to: "get_rendering_info",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_render_targetsize",
    to: "get_render_target_size",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_resource_type",
    to: "_get_resource_type",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_result",
    to: "get_data",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_reverb_bus",
    to: "set_reverb_bus_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_rpc_sender_id",
    to: "get_remote_sender_id",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_save_extension",
    to: "_get_save_extension",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_scancode",
    to: "get_keycode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_scancode_string",
    to: "get_keycode_string",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_scancode_with_modifiers",
    to: "get_keycode_with_modifiers",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_selected_path",
    to: "get_current_directory",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_shader_param",
    to: "get_shader_parameter",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_shift",
    to: "is_shift_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_size_override",
    to: "get_size_2d_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_slide_count",
    to: "get_slide_collision_count",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_slips_on_slope",
    to: "get_slide_on_slope",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_space_override_mode",
    to: "get_gravity_space_override_mode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_spatial_node",
    to: "get_node_3d",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_speed",
    to: "get_velocity",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_stylebox_types",
    to: "get_stylebox_type_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_surface_material",
    to: "get_surface_override_material",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_surface_material_count",
    to: "get_surface_override_material_count",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_tab_disabled",
    to: "is_tab_disabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_tab_hidden",
    to: "is_tab_hidden",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_target_location",
    to: "get_target_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_text_align",
    to: "get_text_alignment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_theme_item_types",
    to: "get_theme_item_type_list",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_timer_process_mode",
    to: "get_timer_process_callback",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_translation",
    to: "get_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_uniform_name",
    to: "get_parameter_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_unit_db",
    to: "get_volume_db",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_unit_offset",
    to: "get_progress_ratio",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_use_in_baked_light",
    to: "is_baking_navigation",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_verts_per_poly",
    to: "get_vertices_per_polygon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_v_scrollbar",
    to: "get_v_scroll_bar",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_visible_name",
    to: "_get_visible_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_window_layout",
    to: "_get_window_layout",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_word_under_cursor",
    to: "get_word_under_caret",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_world",
    to: "get_world_3d",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_zfar",
    to: "get_far",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_znear",
    to: "get_near",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "groove_joint_create",
    to: "joint_make_groove",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "handle_menu_selected",
    to: "_handle_menu_selected",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "handles_type",
    to: "_handles_type",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_color",
    to: "has_theme_color",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_color_override",
    to: "has_theme_color_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_constant",
    to: "has_theme_constant",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_constant_override",
    to: "has_theme_constant_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_filter",
    to: "_has_filter",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_font",
    to: "has_theme_font",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_font_override",
    to: "has_theme_font_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_icon",
    to: "has_theme_icon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_icon_override",
    to: "has_theme_icon_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_main_screen",
    to: "_has_main_screen",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_network_peer",
    to: "has_multiplayer_peer",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_stylebox",
    to: "has_theme_stylebox",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "has_stylebox_override",
    to: "has_theme_stylebox_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "http_escape",
    to: "uri_encode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "http_unescape",
    to: "uri_decode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "import_scene_from_other_importer",
    to: "_import_scene",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "instance_set_surface_material",
    to: "instance_set_surface_override_material",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "interpolate",
    to: "sample",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "intersect_polygons_2d",
    to: "intersect_polygons",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "intersect_polyline_with_polygon_2d",
    to: "intersect_polyline_with_polygon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_a_parent_of",
    to: "is_ancestor_of",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_commiting_action",
    to: "is_committing_action",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_doubleclick",
    to: "is_double_click",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_draw_red",
    to: "is_draw_warning",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_follow_smoothing_enabled",
    to: "is_position_smoothing_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_h_drag_enabled",
    to: "is_drag_horizontal_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_handle_highlighted",
    to: "_is_handle_highlighted",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_inverting_faces",
    to: "get_flip_faces",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_network_master",
    to: "is_multiplayer_authority",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_network_server",
    to: "is_server",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_normalmap",
    to: "is_normal_map",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_refusing_new_network_connections",
    to: "is_refusing_new_connections",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_region",
    to: "is_region_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_rotating",
    to: "is_ignoring_rotation",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_scancode_unicode",
    to: "is_keycode_unicode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_selectable_when_hidden",
    to: "_is_selectable_when_hidden",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_set_as_toplevel",
    to: "is_set_as_top_level",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_shortcut",
    to: "matches_event",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_size_override_stretch_enabled",
    to: "is_size_2d_override_stretch_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_sort_enabled",
    to: "is_y_sort_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_static_body",
    to: "is_able_to_sleep",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_v_drag_enabled",
    to: "is_drag_vertical_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "joint_create_cone_twist",
    to: "joint_make_cone_twist",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "joint_create_generic_6dof",
    to: "joint_make_generic_6dof",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "joint_create_hinge",
    to: "joint_make_hinge",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "joint_create_pin",
    to: "joint_make_pin",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "joint_create_slider",
    to: "joint_make_slider",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "line_intersects_line_2d",
    to: "line_intersects_line",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "load_from_globals",
    to: "load_from_project_settings",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "load_interactive",
    to: "load_threaded_request",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "make_convex_from_brothers",
    to: "make_convex_from_siblings",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "make_visible",
    to: "_make_visible",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "merge_polygons_2d",
    to: "merge_polygons",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "mesh_surface_get_format",
    to: "mesh_surface_get_format_attribute_stride",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "mesh_surface_update_region",
    to: "mesh_surface_update_attribute_region",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "move_to_bottom",
    to: "move_after",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "move_to_top",
    to: "move_before",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "multimesh_allocate",
    to: "multimesh_allocate_data",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "normalmap_to_xy",
    to: "normal_map_to_xy",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "offset_polygon_2d",
    to: "offset_polygon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "offset_polyline_2d",
    to: "offset_polyline",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "percent_decode",
    to: "uri_decode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "percent_encode",
    to: "uri_encode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "pin_joint_create",
    to: "joint_make_pin",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "popup_centered_minsize",
    to: "popup_centered_clamped",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "post_import",
    to: "_post_import",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "print_stray_nodes",
    to: "print_orphan_nodes",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "property_list_changed_notify",
    to: "notify_property_list_changed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "recognize",
    to: "_recognize",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "regen_normalmaps",
    to: "regen_normal_maps",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "region_bake_navmesh",
    to: "region_bake_navigation_mesh",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "region_set_navmesh",
    to: "region_set_navigation_mesh",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "region_set_navpoly",
    to: "region_set_navigation_polygon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_animation",
    to: "remove_animation_library",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_color_override",
    to: "remove_theme_color_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_constant_override",
    to: "remove_theme_constant_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_font_override",
    to: "remove_theme_font_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_icon_override",
    to: "remove_theme_icon_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_scene_import_plugin",
    to: "remove_scene_format_importer_plugin",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_spatial_gizmo_plugin",
    to: "remove_node_3d_gizmo_plugin",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "remove_stylebox_override",
    to: "remove_theme_stylebox_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "rename_animation",
    to: "rename_animation_library",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "rename_dependencies",
    to: "_rename_dependencies",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "save_external_data",
    to: "_save_external_data",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "segment_intersects_segment_2d",
    to: "segment_intersects_segment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_adjustment_enable",
    to: "set_adjustment_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_alt",
    to: "set_alt_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_anchor_and_margin",
    to: "set_anchor_and_offset",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_anchors_and_margins_preset",
    to: "set_anchors_and_offsets_preset",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_animation_process_mode",
    to: "set_process_callback",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_as_bulk_array",
    to: "set_buffer",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_as_normalmap",
    to: "set_as_normal_map",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_as_toplevel",
    to: "set_as_top_level",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_audio_bus",
    to: "set_audio_bus_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_autowrap",
    to: "set_autowrap_mode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_cast_to",
    to: "set_target_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_collision_layer_bit",
    to: "set_collision_layer_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_collision_mask_bit",
    to: "set_collision_mask_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_column_min_width",
    to: "set_column_custom_minimum_width",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_command",
    to: "set_meta_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_control",
    to: "set_ctrl_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_create_options",
    to: "_set_create_options",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_cull_mask_bit",
    to: "set_cull_mask_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_cursor_position",
    to: "set_caret_column",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_d",
    to: "set_distance",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_default_length",
    to: "set_length",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_depth_bias_enable",
    to: "set_depth_bias_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_device",
    to: "set_output_device",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_doubleclick",
    to: "set_double_click",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_draw_red",
    to: "set_draw_warning",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_enable_follow_smoothing",
    to: "set_position_smoothing_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_enabled_focus_mode",
    to: "set_focus_mode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_endian_swap",
    to: "set_big_endian",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_expand_to_text_length",
    to: "set_expand_to_text_length_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_filename",
    to: "set_scene_file_path",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_focus_neighbour",
    to: "set_focus_neighbor",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_follow_smoothing",
    to: "set_position_smoothing_speed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_frame_color",
    to: "set_color",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_global_rate_scale",
    to: "set_playback_speed_scale",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_gravity_distance_scale",
    to: "set_gravity_point_unit_distance",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_gravity_vector",
    to: "set_gravity_direction",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_h_drag_enabled",
    to: "set_drag_horizontal_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_icon_align",
    to: "set_icon_alignment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_interior_ambient",
    to: "set_ambient_color",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_interior_ambient_energy",
    to: "set_ambient_color_energy",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_invert_faces",
    to: "set_flip_faces",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_is_initialized",
    to: "_is_initialized",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_is_primary",
    to: "set_primary",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_item_navmesh",
    to: "set_item_navigation_mesh",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_item_navmesh_transform",
    to: "set_item_navigation_mesh_transform",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_iterations_per_second",
    to: "set_physics_ticks_per_second",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_layer_mask_bit",
    to: "set_layer_mask_value",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_margins_preset",
    to: "set_offsets_preset",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_max_atlas_size",
    to: "set_max_texture_size",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_metakey",
    to: "set_meta_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_mid_height",
    to: "set_height",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_neighbor_dist",
    to: "set_neighbor_distance",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_network_master",
    to: "set_multiplayer_authority",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_network_peer",
    to: "set_multiplayer_peer",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_oneshot",
    to: "set_one_shot",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_pause_mode",
    to: "set_process_mode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_physical_scancode",
    to: "set_physical_keycode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_proximity_fade",
    to: "set_proximity_fade_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_refuse_new_network_connections",
    to: "set_refuse_new_connections",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_region",
    to: "set_region_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_region_filter_clip",
    to: "set_region_filter_clip_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_reverb_bus",
    to: "set_reverb_bus_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_rotate",
    to: "set_rotates",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_scancode",
    to: "set_keycode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_shader_param",
    to: "set_shader_parameter",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_shift",
    to: "set_shift_pressed",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_size_override",
    to: "set_size_2d_override",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_size_override_stretch",
    to: "set_size_2d_override_stretch",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_slips_on_slope",
    to: "set_slide_on_slope",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_sort_enabled",
    to: "set_y_sort_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_space_override_mode",
    to: "set_gravity_space_override_mode",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_spatial_node",
    to: "set_node_3d",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_speed",
    to: "set_velocity",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_ssao_edge_sharpness",
    to: "set_ssao_sharpness",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_surface_material",
    to: "set_surface_override_material",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_tab_align",
    to: "set_tab_alignment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_tangent",
    to: "surface_set_tangent",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_target_location",
    to: "set_target_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_text_align",
    to: "set_text_alignment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_timer_process_mode",
    to: "set_timer_process_callback",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_translation",
    to: "set_position",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_uniform_name",
    to: "set_parameter_name",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_unit_db",
    to: "set_volume_db",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_unit_offset",
    to: "set_progress_ratio",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_uv2",
    to: "surface_set_uv2",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_verts_per_poly",
    to: "set_vertices_per_polygon",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_v_drag_enabled",
    to: "set_drag_vertical_enabled",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_valign",
    to: "set_vertical_alignment",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_window_layout",
    to: "_set_window_layout",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_zfar",
    to: "set_far",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "set_znear",
    to: "set_near",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "shortcut_match",
    to: "is_match",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "skeleton_allocate",
    to: "skeleton_allocate_data",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "surface_update_region",
    to: "surface_update_attribute_region",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "track_remove_key_at_position",
    to: "track_remove_key_at_time",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "triangulate_delaunay_2d",
    to: "triangulate_delaunay",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "unselect",
    to: "deselect",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "unselect_all",
    to: "deselect_all",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "update_configuration_warning",
    to: "update_configuration_warnings",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "update_gizmo",
    to: "update_gizmos",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "viewport_set_use_arvr",
    to: "viewport_set_use_xr",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "warp_mouse_position",
    to: "warp_mouse",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "world_to_map",
    to: "local_to_map",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "clamped",
    to: "limit_length",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "get_rotation_quat",
    to: "get_rotation_quaternion",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "grow_margin",
    to: "grow_side",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_abs_path",
    to: "is_absolute_path",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "is_valid_integer",
    to: "is_valid_int",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "linear_interpolate",
    to: "lerp",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "find_last",
    to: "rfind",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "to_ascii",
    to: "to_ascii_buffer",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "to_utf8",
    to: "to_utf8_buffer",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "to_wchar",
    to: "to_wchar_buffer",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "bytes2var",
    to: "bytes_to_var",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "bytes2var_with_objects",
    to: "bytes_to_var_with_objects",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "db2linear",
    to: "db_to_linear",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "deg2rad",
    to: "deg_to_rad",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "linear2db",
    to: "linear_to_db",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "rad2deg",
    to: "rad_to_deg",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "rand_range",
    to: "randf_range",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "range_lerp",
    to: "remap",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "stepify",
    to: "snapped",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "str2var",
    to: "str_to_var",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "var2str",
    to: "var_to_str",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "var2bytes",
    to: "var_to_bytes",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "var2bytes_with_objects",
    to: "var_to_bytes_with_objects",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "dict2inst",
    to: "dict_to_inst",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "inst2dict",
    to: "inst_to_dict",
    type: RenameType.GD_FUNCTIONS,
  },
  {
    from: "_AboutToShow",
    to: "_AboutToPopup",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "_GetConfigurationWarning",
    to: "_GetConfigurationWarnings",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "_SetCurrent",
    to: "SetCurrent",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "_SetEditorDescription",
    to: "SetEditorDescription",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "_SetPlaying",
    to: "SetPlaying",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "_ToplevelRaiseSelf",
    to: "_TopLevelRaiseSelf",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "_UpdateWrapAt",
    to: "_UpdateWrapAtColumn",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddAnimation",
    to: "AddAnimationLibrary",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddCancel",
    to: "AddCancelButton",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddCentralForce",
    to: "AddConstantCentralForce",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddChildBelowNode",
    to: "AddSibling",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddColorOverride",
    to: "AddThemeColorOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddConstantOverride",
    to: "AddThemeConstantOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddFontOverride",
    to: "AddThemeFontOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddForce",
    to: "AddConstantForce",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddIconOverride",
    to: "AddThemeIconOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddSceneImportPlugin",
    to: "AddSceneFormatImporterPlugin",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddSpatialGizmoPlugin",
    to: "AddNode3dGizmoPlugin",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddStyleboxOverride",
    to: "AddThemeStyleboxOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AddTorque",
    to: "AddConstantTorque",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "AgentSetNeighborDist",
    to: "AgentSetNeighborDistance",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "BindChildNodeToBone",
    to: "SetBoneChildren",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "BumpmapToNormalmap",
    to: "BumpMapToNormalMap",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CanBeHidden",
    to: "_CanBeHidden",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CanDropData",
    to: "_CanDropData",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CanDropDataFw",
    to: "_CanDropDataFw",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CanGenerateSmallPreview",
    to: "_CanGenerateSmallPreview",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CanInstance",
    to: "CanInstantiate",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CanvasLightSetScale",
    to: "CanvasLightSetTextureScale",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CaptureGetDevice",
    to: "GetInputDevice",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CaptureGetDeviceList",
    to: "GetInputDeviceList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CaptureSetDevice",
    to: "SetInputDevice",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CenterViewportToCursor",
    to: "CenterViewportToCaret",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ChangeScene",
    to: "ChangeSceneToFile",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ChangeSceneTo",
    to: "ChangeSceneToPacked",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ClipPolygons2d",
    to: "ClipPolygons",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ClipPolylineWithPolygon2d",
    to: "ClipPolylineWithPolygon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CommitHandle",
    to: "_CommitHandle",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ConvexHull2d",
    to: "ConvexHull",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CursorGetBlinkSpeed",
    to: "GetCaretBlinkInterval",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CursorGetColumn",
    to: "GetCaretColumn",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CursorGetLine",
    to: "GetCaretLine",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CursorSetBlinkEnabled",
    to: "SetCaretBlinkEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CursorSetBlinkSpeed",
    to: "SetCaretBlinkInterval",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CursorSetColumn",
    to: "SetCaretColumn",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "CursorSetLine",
    to: "SetCaretLine",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "DampedSpringJointCreate",
    to: "JointMakeDampedSpring",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "DampedStringJointGetParam",
    to: "DampedSpringJointGetParam",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "DampedStringJointSetParam",
    to: "DampedSpringJointSetParam",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "DeleteCharAtCursor",
    to: "DeleteCharAtCaret",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "DeselectItems",
    to: "DeselectAll",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "DropData",
    to: "_DropData",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "DropDataFw",
    to: "_DropDataFw",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ExcludePolygons2d",
    to: "ExcludePolygons",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "FindScancodeFromString",
    to: "FindKeycodeFromString",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ForwardCanvasDrawOverViewport",
    to: "_ForwardCanvasDrawOverViewport",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ForwardCanvasForceDrawOverViewport",
    to: "_ForwardCanvasForceDrawOverViewport",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ForwardCanvasGuiInput",
    to: "_ForwardCanvasGuiInput",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ForwardSpatialDrawOverViewport",
    to: "_Forward3dDrawOverViewport",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ForwardSpatialForceDrawOverViewport",
    to: "_Forward3dForceDrawOverViewport",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ForwardSpatialGuiInput",
    to: "_Forward3dGuiInput",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GenerateFromPath",
    to: "_GenerateFromPath",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GenerateSmallPreviewAutomatically",
    to: "_GenerateSmallPreviewAutomatically",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetActionList",
    to: "ActionGetEvents",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetAlt",
    to: "IsAltPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetAnimationProcessMode",
    to: "GetProcessCallback",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetAppliedForce",
    to: "GetConstantForce",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetAppliedTorque",
    to: "GetConstantTorque",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetAudioBus",
    to: "GetAudioBusName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetBoundChildNodesToBone",
    to: "GetBoneChildren",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCamera",
    to: "GetCamera3d",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCancel",
    to: "GetCancelButton",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCaption",
    to: "_GetCaption",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCastTo",
    to: "GetTargetPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetChildByName",
    to: "_GetChildByName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetChildNodes",
    to: "_GetChildNodes",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetClosestPointToSegment2d",
    to: "GetClosestPointToSegment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetClosestPointToSegmentUncapped2d",
    to: "GetClosestPointToSegmentUncapped",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetClosestPointsBetweenSegments2d",
    to: "GetClosestPointToSegment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCollisionLayerBit",
    to: "GetCollisionLayerValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCollisionMaskBit",
    to: "GetCollisionMaskValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetColorTypes",
    to: "GetColorTypeList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCommand",
    to: "IsCommandPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetConstantTypes",
    to: "GetConstantTypeList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetControl",
    to: "IsCtrlPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCullMaskBit",
    to: "GetCullMaskValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetCursorPosition",
    to: "GetCaretColumn",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetD",
    to: "GetDistance",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetDefaultLength",
    to: "GetLength",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetDepthBiasEnable",
    to: "GetDepthBiasEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetDevice",
    to: "GetOutputDevice",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetDeviceList",
    to: "GetOutputDeviceList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetDragDataFw",
    to: "_GetDragDataFw",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetEditorViewport",
    to: "GetViewport",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetEnabledFocusMode",
    to: "GetFocusMode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetEndianSwap",
    to: "IsBigEndian",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetErrorString",
    to: "GetErrorMessage",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetFinalLocation",
    to: "GetFinalPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetFocusNeighbour",
    to: "GetFocusNeighbor",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetFollowSmoothing",
    to: "GetPositionSmoothingSpeed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetFontTypes",
    to: "GetFontTypeList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetFrameColor",
    to: "GetColor",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetGlobalRateScale",
    to: "GetPlaybackSpeedScale",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetGravityDistanceScale",
    to: "GetGravityPointDistanceScale",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetGravityVector",
    to: "GetGravityDirection",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetHScrollbar",
    to: "GetHScrollBar",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetHand",
    to: "GetTrackerHand",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetHandleName",
    to: "_GetHandleName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetHandleValue",
    to: "_GetHandleValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetIconAlign",
    to: "GetIconAlignment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetIconTypes",
    to: "GetIconTypeList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetIdleFrames",
    to: "GetProcessFrames",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetImportOptions",
    to: "_GetImportOptions",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetImportOrder",
    to: "_GetImportOrder",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetImporterName",
    to: "_GetImporterName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetInteriorAmbient",
    to: "GetAmbientColor",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetInteriorAmbientEnergy",
    to: "GetAmbientColorEnergy",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetItemNavmesh",
    to: "GetItemMavigationMesh",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetItemNavmeshTransform",
    to: "GetItemNavigationMeshTransform",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetIterationsPerSecond",
    to: "GetPhysicsTicksPerSecond",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetLastMouseSpeed",
    to: "GetLastMouseVelocity",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetLayerMaskBit",
    to: "GetLayerMaskValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetLen",
    to: "GetLength",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetMaxAtlasSize",
    to: "GetMaxTextureSize",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetMetakey",
    to: "IsMetaPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetMidHeight",
    to: "GetHeight",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetMotionRemainder",
    to: "GetRemainder",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNavPath",
    to: "GetCurrentNavigationPath",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNavPathIndex",
    to: "GetCurrentNavigationPathIndex",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNeighborDist",
    to: "GetNeighborDistance",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNetworkConnectedPeers",
    to: "GetPeers",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNetworkMaster",
    to: "GetMultiplayerAuthority",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNetworkPeer",
    to: "GetMultiplayerPeer",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNetworkUniqueId",
    to: "GetUniqueId",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetNextLocation",
    to: "GetNextPathPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetOneshot",
    to: "GetOneShot",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetOk",
    to: "GetOkButton",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetOptionVisibility",
    to: "_GetOptionVisibility",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetParameterDefaultValue",
    to: "_GetParameterDefaultValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetParameterList",
    to: "_GetParameterList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetParentSpatial",
    to: "GetParentNode3d",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetPhysicalScancode",
    to: "GetPhysicalKeycode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetPhysicalScancodeWithModifiers",
    to: "GetPhysicalKeycodeWithModifiers",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetPluginIcon",
    to: "_GetPluginIcon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetPluginName",
    to: "_GetPluginName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetPresetCount",
    to: "_GetPresetCount",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetPresetName",
    to: "_GetPresetName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetRecognizedExtensions",
    to: "_GetRecognizedExtensions",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetRenderInfo",
    to: "GetRenderingInfo",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetRenderTargetsize",
    to: "GetRenderTargetSize",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetResourceType",
    to: "_GetResourceType",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetResult",
    to: "GetData",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetReverbBus",
    to: "GetReverbBusName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetRpcSenderId",
    to: "GetRemoteSenderId",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSaveExtension",
    to: "_GetSaveExtension",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetScancode",
    to: "GetKeycode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetScancodeString",
    to: "GetKeycodeString",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetScancodeWithModifiers",
    to: "GetKeycodeWithModifiers",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetShaderParam",
    to: "GetShaderParameter",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetShift",
    to: "IsShiftPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSizeOverride",
    to: "GetSize2dOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSlipsOnSlope",
    to: "GetSlideOnSlope",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSpaceOverrideMode",
    to: "GetGravitySpaceOverrideMode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSpatialNode",
    to: "GetNode3d",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSpeed",
    to: "GetVelocity",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetStyleboxTypes",
    to: "GetStyleboxTypeList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSurfaceMaterial",
    to: "GetSurfaceOverrideMaterial",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetSurfaceMaterialCount",
    to: "GetSurfaceOverrideMaterialCount",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetTabDisabled",
    to: "IsTabDisabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetTabHidden",
    to: "IsTabHidden",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetTargetLocation",
    to: "GetTargetPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetTextAlign",
    to: "GetTextAlignment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetThemeItemTypes",
    to: "GetThemeItemTypeList",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetTimerProcessMode",
    to: "GetTimerProcessCallback",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetTranslation",
    to: "GetPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetUniformName",
    to: "GetParameterName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetUnitDb",
    to: "GetVolumeDb",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetUnitOffset",
    to: "GetProgressRatio",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetUseInBakedLight",
    to: "IsBakingNavigation",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetVertsPerPoly",
    to: "GetVerticesPerPolygon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetVScrollbar",
    to: "GetVScrollBar",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetVisibleName",
    to: "_GetVisibleName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetWindowLayout",
    to: "_GetWindowLayout",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetWordUnderCursor",
    to: "GetWordUnderCaret",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetWorld",
    to: "GetWorld3d",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetZfar",
    to: "GetFar",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetZnear",
    to: "GetNear",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GrooveJointCreate",
    to: "JointMakeGroove",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HandleMenuSelected",
    to: "_HandleMenuSelected",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HandlesType",
    to: "_HandlesType",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasColor",
    to: "HasThemeColor",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasColorOverride",
    to: "HasThemeColorOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasConstant",
    to: "HasThemeConstant",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasConstantOverride",
    to: "HasThemeConstantOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasFilter",
    to: "_HasFilter",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasFont",
    to: "HasThemeFont",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasFontOverride",
    to: "HasThemeFontOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasIcon",
    to: "HasThemeIcon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasIconOverride",
    to: "HasThemeIconOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasMainScreen",
    to: "_HasMainScreen",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasNetworkPeer",
    to: "HasMultiplayerPeer",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasStylebox",
    to: "HasThemeStylebox",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HasStyleboxOverride",
    to: "HasThemeStyleboxOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HttpEscape",
    to: "UriEncode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "HttpUnescape",
    to: "UriDecode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ImportAnimationFromOtherImporter",
    to: "_ImportAnimation",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ImportSceneFromOtherImporter",
    to: "_ImportScene",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "InstanceSetSurfaceMaterial",
    to: "InstanceSetSurfaceOverrideMaterial",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IntersectPolygons2d",
    to: "IntersectPolygons",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IntersectPolylineWithPolygon2d",
    to: "IntersectPolylineWithPolygon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsAParentOf",
    to: "IsAncestorOf",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsCommitingAction",
    to: "IsCommittingAction",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsDoubleclick",
    to: "IsDoubleClick",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsFollowSmoothingEnabled",
    to: "IsPositionSmoothingEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsHDragEnabled",
    to: "IsDragHorizontalEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsHandleHighlighted",
    to: "_IsHandleHighlighted",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsNetworkMaster",
    to: "IsMultiplayerAuthority",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsNetworkServer",
    to: "IsServer",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsNormalmap",
    to: "IsNormalMap",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsRefusingNewNetworkConnections",
    to: "IsRefusingNewConnections",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsRegion",
    to: "IsRegionEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsRotating",
    to: "IsIgnoringRotation",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsScancodeUnicode",
    to: "IsKeycodeUnicode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsSelectableWhenHidden",
    to: "_IsSelectableWhenHidden",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsSetAsToplevel",
    to: "IsSetAsTopLevel",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsShortcut",
    to: "MatchesEvent",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsSizeOverrideStretchEnabled",
    to: "IsSize2dOverrideStretchEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsSortEnabled",
    to: "IsYSortEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsStaticBody",
    to: "IsAbleToSleep",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsVDragEnabled",
    to: "IsDragVerticalEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "JointCreateConeTwist",
    to: "JointMakeConeTwist",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "JointCreateGeneric6dof",
    to: "JointMakeGeneric6dof",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "JointCreateHinge",
    to: "JointMakeHinge",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "JointCreatePin",
    to: "JointMakePin",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "JointCreateSlider",
    to: "JointMakeSlider",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "LineIntersectsLine2d",
    to: "LineIntersectsLine",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "LoadFromGlobals",
    to: "LoadFromProjectSettings",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "MakeConvexFromBrothers",
    to: "MakeConvexFromSiblings",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "MergePolygons2d",
    to: "MergePolygons",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "MeshSurfaceGetFormat",
    to: "MeshSurfaceGetFormatAttributeStride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "MeshSurfaceUpdateRegion",
    to: "MeshSurfaceUpdateAttributeRegion",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "MoveToBottom",
    to: "MoveAfter",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "MoveToTop",
    to: "MoveBefore",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "MultimeshAllocate",
    to: "MultimeshAllocateData",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "NormalmapToXy",
    to: "NormalMapToXy",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "OffsetPolygon2d",
    to: "OffsetPolygon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "OffsetPolyline2d",
    to: "OffsetPolyline",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "PercentDecode",
    to: "UriDecode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "PercentEncode",
    to: "UriEncode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "PinJointCreate",
    to: "JointMakePin",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "PopupCenteredMinsize",
    to: "PopupCenteredClamped",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "PostImport",
    to: "_PostImport",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "PrintStrayNodes",
    to: "PrintOrphanNodes",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "PropertyListChangedNotify",
    to: "NotifyPropertyListChanged",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Recognize",
    to: "_Recognize",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RegenNormalmaps",
    to: "RegenNormalMaps",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RegionBakeNavmesh",
    to: "region_bake_navigation_mesh",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RegionSetNavmesh",
    to: "RegionSetNavigationMesh",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RegionSetNavpoly",
    to: "RegionSetNavigationPolygon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RemoveAnimation",
    to: "RemoveAnimationLibrary",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RemoveColorOverride",
    to: "RemoveThemeColorOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RemoveConstantOverride",
    to: "RemoveThemeConstantOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RemoveFontOverride",
    to: "RemoveThemeFontOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RemoveSceneImportPlugin",
    to: "RemoveSceneFormatImporterPlugin",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RemoveSpatialGizmoPlugin",
    to: "RemoveNode3dGizmoPlugin",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RemoveStyleboxOverride",
    to: "RemoveThemeStyleboxOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RenameAnimation",
    to: "RenameAnimationLibrary",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RenameDependencies",
    to: "_RenameDependencies",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SaveExternalData",
    to: "_SaveExternalData",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SegmentIntersectsSegment2d",
    to: "SegmentIntersectsSegment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAdjustmentEnable",
    to: "SetAdjustmentEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAlt",
    to: "SetAltPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAnchorAndMargin",
    to: "SetAnchorAndOffset",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAnchorsAndMarginsPreset",
    to: "SetAnchorsAndOffsetsPreset",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAnimationProcessMode",
    to: "SetProcessCallback",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAsBulkArray",
    to: "SetBuffer",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAsNormalmap",
    to: "SetAsNormalMap",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAsToplevel",
    to: "SetAsTopLevel",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAudioBus",
    to: "SetAudioBusName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetAutowrap",
    to: "SetAutowrapMode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetCastTo",
    to: "SetTargetPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetCollisionLayerBit",
    to: "SetCollisionLayerValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetCollisionMaskBit",
    to: "SetCollisionMaskValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetColumnMinWidth",
    to: "SetColumnCustomMinimumWidth",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetCommand",
    to: "SetCommandPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetControl",
    to: "SetCtrlPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetCreateOptions",
    to: "_SetCreateOptions",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetCullMaskBit",
    to: "SetCullMaskValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetCursorPosition",
    to: "SetCaretColumn",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetD",
    to: "SetDistance",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetDefaultLength",
    to: "SetLength",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetDepthBiasEnable",
    to: "SetDepthBiasEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetDevice",
    to: "SetOutputDevice",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetDoubleclick",
    to: "SetDoubleClick",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetEnableFollowSmoothing",
    to: "SetPositionSmoothingEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetEnabledFocusMode",
    to: "SetFocusMode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetEndianSwap",
    to: "SetBigEndian",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetExpandToTextLength",
    to: "SetExpandToTextLengthEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetFocusNeighbour",
    to: "SetFocusNeighbor",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetFollowSmoothing",
    to: "SetPositionSmoothingSpeed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetFrameColor",
    to: "SetColor",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetGlobalRateScale",
    to: "SetPlaybackSpeedScale",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetGravityDistanceScale",
    to: "SetGravityPointDistanceScale",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetGravityVector",
    to: "SetGravityDirection",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetHDragEnabled",
    to: "SetDragHorizontalEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetIconAlign",
    to: "SetIconAlignment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetInteriorAmbient",
    to: "SetAmbientColor",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetInteriorAmbientEnergy",
    to: "SetAmbientColorEnergy",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetIsInitialized",
    to: "_IsInitialized",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetIsPrimary",
    to: "SetPrimary",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetItemNavmesh",
    to: "SetItemNavigationMesh",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetItemNavmeshTransform",
    to: "SetItemNavigationMeshTransform",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetIterationsPerSecond",
    to: "SetPhysicsTicksPerSecond",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetLayerMaskBit",
    to: "SetLayerMaskValue",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetMarginsPreset",
    to: "SetOffsetsPreset",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetMaxAtlasSize",
    to: "SetMaxTextureSize",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetMetakey",
    to: "SetMetaPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetMidHeight",
    to: "SetHeight",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetNeighborDist",
    to: "SetNeighborDistance",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetNetworkMaster",
    to: "SetMultiplayerAuthority",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetNetworkPeer",
    to: "SetMultiplayerPeer",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetOneshot",
    to: "SetOneShot",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetPhysicalScancode",
    to: "SetPhysicalKeycode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetProximityFade",
    to: "SetProximityFadeEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetRefuseNewNetworkConnections",
    to: "SetRefuseNewConnections",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetRegion",
    to: "SetRegionEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetRegionFilterClip",
    to: "SetRegionFilterClipEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetReverbBus",
    to: "SetReverbBusName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetRotate",
    to: "SetRotates",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetScancode",
    to: "SetKeycode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetShaderParam",
    to: "SetShaderParameter",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetShift",
    to: "SetShiftPressed",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSizeOverride",
    to: "SetSize2dOverride",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSizeOverrideStretch",
    to: "SetSize2dOverrideStretch",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSlipsOnSlope",
    to: "SetSlideOnSlope",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSortEnabled",
    to: "SetYSortEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSpaceOverrideMode",
    to: "SetGravitySpaceOverrideMode",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSpatialNode",
    to: "SetNode3d",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSpeed",
    to: "SetVelocity",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSsaoEdgeSharpness",
    to: "SetSsaoSharpness",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetSurfaceMaterial",
    to: "SetSurfaceOverrideMaterial",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetTabAlign",
    to: "SetTabAlignment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetTangent",
    to: "SurfaceSetTangent",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetTargetLocation",
    to: "SetTargetPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetTextAlign",
    to: "SetTextAlignment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetTimerProcessMode",
    to: "SetTimerProcessCallback",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetTonemapAutoExposure",
    to: "SetTonemapAutoExposureEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetTranslation",
    to: "SetPosition",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetUniformName",
    to: "SetParameterName",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetUnitDb",
    to: "SetVolumeDb",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetUnitOffset",
    to: "SetProgressRatio",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetUv2",
    to: "SurfaceSetUv2",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetVertsPerPoly",
    to: "SetVerticesPerPolygon",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetVDragEnabled",
    to: "SetDragVerticalEnabled",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetValign",
    to: "SetVerticalAlignment",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetWindowLayout",
    to: "_SetWindowLayout",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetZfar",
    to: "SetFar",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SetZnear",
    to: "SetNear",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ShortcutMatch",
    to: "IsMatch",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SkeletonAllocate",
    to: "SkeletonAllocateData",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "SurfaceUpdateRegion",
    to: "SurfaceUpdateAttributeRegion",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "TrackRemoveKeyAtPosition",
    to: "TrackRemoveKeyAtTime",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "TriangulateDelaunay2d",
    to: "TriangulateDelaunay",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "UnbindChildNodeFromBone",
    to: "RemoveBoneChild",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Unselect",
    to: "Deselect",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "UnselectAll",
    to: "DeselectAll",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "UpdateConfigurationWarning",
    to: "UpdateConfigurationWarnings",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "UpdateGizmo",
    to: "UpdateGizmos",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ViewportSetUseArvr",
    to: "ViewportSetUseXr",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "WarpMousePosition",
    to: "WarpMouse",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "WorldToMap",
    to: "LocalToMap",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Clamped",
    to: "LimitLength",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GetRotationQuat",
    to: "GetRotationQuaternion",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "GrowMargin",
    to: "GrowSide",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsAbsPath",
    to: "IsAbsolutePath",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "IsValidInteger",
    to: "IsValidInt",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "LinearInterpolate",
    to: "Lerp",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ToAscii",
    to: "ToAsciiBuffer",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "ToUtf8",
    to: "ToUtf8Buffer",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Bytes2Var",
    to: "BytesToVar",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Bytes2VarWithObjects",
    to: "BytesToVarWithObjects",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Db2Linear",
    to: "DbToLinear",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Deg2Rad",
    to: "DegToRad",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Linear2Db",
    to: "LinearToDb",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Rad2Deg",
    to: "RadToDeg",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RandRange",
    to: "RandfRange",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "RangeLerp",
    to: "Remap",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Stepify",
    to: "Snapped",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Str2Var",
    to: "StrToVar",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Var2Str",
    to: "VarToStr",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Var2Bytes",
    to: "VarToBytes",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Var2BytesWithObjects",
    to: "VarToBytesWithObjects",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Dict2Inst",
    to: "DictToInst",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "Inst2Dict",
    to: "InstToDict",
    type: RenameType.CS_FUNCTIONS,
  },
  {
    from: "as_normalmap",
    to: "as_normal_map",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "bbcode_text",
    to: "text",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "bg_focus",
    to: "focus",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "capture_device",
    to: "input_device",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "caret_blink_speed",
    to: "caret_blink_interval",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "caret_moving_by_right_click",
    to: "caret_move_on_right_click",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "caret_position",
    to: "caret_column",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "cast_to",
    to: "target_position",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "check_vadjust",
    to: "check_v_offset",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "close_h_ofs",
    to: "close_h_offset",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "close_v_ofs",
    to: "close_v_offset",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "commentfocus",
    to: "comment_focus",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "contacts_reported",
    to: "max_contacts_reported",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "depth_bias_enable",
    to: "depth_bias_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "drag_margin_bottom",
    to: "drag_bottom_margin",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "drag_margin_h_enabled",
    to: "drag_horizontal_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "drag_margin_left",
    to: "drag_left_margin",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "drag_margin_right",
    to: "drag_right_margin",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "drag_margin_top",
    to: "drag_top_margin",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "drag_margin_v_enabled",
    to: "drag_vertical_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "enabled_focus_mode",
    to: "focus_mode",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "extents",
    to: "size",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "extra_spacing_bottom",
    to: "spacing_bottom",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "extra_spacing_top",
    to: "spacing_top",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "focus_neighbour_bottom",
    to: "focus_neighbor_bottom",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "focus_neighbour_left",
    to: "focus_neighbor_left",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "focus_neighbour_right",
    to: "focus_neighbor_right",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "focus_neighbour_top",
    to: "focus_neighbor_top",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "follow_viewport_enable",
    to: "follow_viewport_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "file_icon_modulate",
    to: "file_icon_color",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "files_disabled",
    to: "file_disabled_color",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "folder_icon_modulate",
    to: "folder_icon_color",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "global_rate_scale",
    to: "playback_speed_scale",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "global_translation",
    to: "global_position",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "gravity_distance_scale",
    to: "gravity_point_unit_distance",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "gravity_vec",
    to: "gravity_direction",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "hint_tooltip",
    to: "tooltip_text",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "hseparation",
    to: "h_separation",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "icon_align",
    to: "icon_alignment",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "iterations_per_second",
    to: "physics_ticks_per_second",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "invert_enable",
    to: "invert_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "margin_bottom",
    to: "offset_bottom",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "margin_left",
    to: "offset_left",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "margin_right",
    to: "offset_right",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "margin_top",
    to: "offset_top",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "mid_height",
    to: "height",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "navpoly",
    to: "navigation_polygon",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "navmesh",
    to: "navigation_mesh",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "neighbor_dist",
    to: "neighbor_distance",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "octaves",
    to: "fractal_octaves",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "offset_h",
    to: "drag_horizontal_offset",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "offset_v",
    to: "drag_vertical_offset",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "off_disabled",
    to: "unchecked_disabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "on_disabled",
    to: "checked_disabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "oneshot",
    to: "one_shot",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "out_of_range_mode",
    to: "max_polyphony",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "pause_mode",
    to: "process_mode",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "physical_scancode",
    to: "physical_keycode",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "polygon_verts_per_poly",
    to: "polygon_vertices_per_polyon",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "popup_exclusive",
    to: "exclusive",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "proximity_fade_enable",
    to: "proximity_fade_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_position",
    to: "position",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_global_position",
    to: "global_position",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_size",
    to: "size",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_min_size",
    to: "custom_minimum_size",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_rotation",
    to: "rotation",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_scale",
    to: "scale",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_pivot_offset",
    to: "pivot_offset",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "rect_clip_content",
    to: "clip_contents",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "refuse_new_network_connections",
    to: "refuse_new_connections",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "region_filter_clip",
    to: "region_filter_clip_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "reverb_bus_enable",
    to: "reverb_bus_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "scancode",
    to: "keycode",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "selectedframe",
    to: "selected_frame",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "size_override_stretch",
    to: "size_2d_override_stretch",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "slips_on_slope",
    to: "slide_on_slope",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "smoothing_enabled",
    to: "position_smoothing_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "smoothing_speed",
    to: "position_smoothing_speed",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "ss_reflections_depth_tolerance",
    to: "ssr_depth_tolerance",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "ss_reflections_enabled",
    to: "ssr_enabled",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "ss_reflections_fade_in",
    to: "ssr_fade_in",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "ss_reflections_fade_out",
    to: "ssr_fade_out",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "ss_reflections_max_steps",
    to: "ssr_max_steps",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "state_machine_selectedframe",
    to: "state_machine_selected_frame",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "syntax_highlighting",
    to: "syntax_highlighter",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "tab_align",
    to: "tab_alignment",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "table_hseparation",
    to: "table_h_separation",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "table_vseparation",
    to: "table_v_separation",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "tangent",
    to: "orthogonal",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "target_location",
    to: "target_position",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "toplevel",
    to: "top_level",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "translation",
    to: "position",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "unit_db",
    to: "volume_db",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "unit_offset",
    to: "progress_ratio",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "vseparation",
    to: "v_separation",
    type: RenameType.GD_PROPERTIES,
  },
  {
    from: "AsNormalmap",
    to: "AsNormalMap",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "BbcodeText",
    to: "Text",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "BgFocus",
    to: "Focus",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CaptureDevice",
    to: "InputDevice",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CaretBlinkSpeed",
    to: "CaretBlinkInterval",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CaretMovingByRightClick",
    to: "CaretMoveOnRightClick",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CaretPosition",
    to: "CaretColumn",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CastTo",
    to: "TargetPosition",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CheckVadjust",
    to: "CheckVAdjust",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CloseHOfs",
    to: "CloseHOffset",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "CloseVOfs",
    to: "CloseVOffset",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Commentfocus",
    to: "CommentFocus",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "ContactsReported",
    to: "MaxContactsReported",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "DepthBiasEnable",
    to: "DepthBiasEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "DragMarginBottom",
    to: "DragBottomMargin",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "DragMarginHEnabled",
    to: "DragHorizontalEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "DragMarginLeft",
    to: "DragLeftMargin",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "DragMarginRight",
    to: "DragRightMargin",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "DragMarginTop",
    to: "DragTopMargin",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "DragMarginVEnabled",
    to: "DragVerticalEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "EnabledFocusMode",
    to: "FocusMode",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Extents",
    to: "Size",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "ExtraSpacingBottom",
    to: "SpacingBottom",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "ExtraSpacingTop",
    to: "SpacingTop",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FocusNeighbourBottom",
    to: "FocusNeighborBottom",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FocusNeighbourLeft",
    to: "FocusNeighborLeft",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FocusNeighbourRight",
    to: "FocusNeighborRight",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FocusNeighbourTop",
    to: "FocusNeighborTop",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FollowViewportEnable",
    to: "FollowViewportEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FileIconModulate",
    to: "FileIconColor",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FilesDisabled",
    to: "FileDisabledColor",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "FolderIconModulate",
    to: "FolderIconColor",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "GlobalRateScale",
    to: "PlaybackSpeedScale",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "GravityDistanceScale",
    to: "GravityPointDistanceScale",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "GravityVec",
    to: "GravityDirection",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "HintTooltip",
    to: "TooltipText",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Hseparation",
    to: "HSeparation",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "IconAlign",
    to: "IconAlignment",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "IterationsPerSecond",
    to: "PhysicsTicksPerSecond",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "InvertEnable",
    to: "InvertEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "MarginBottom",
    to: "OffsetBottom",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "MarginLeft",
    to: "OffsetLeft",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "MarginRight",
    to: "OffsetRight",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "MarginTop",
    to: "OffsetTop",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "MidHeight",
    to: "Height",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Navpoly",
    to: "NavigationPolygon",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Navmesh",
    to: "NavigationMesh",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "NeighborDist",
    to: "NeighborDistance",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Octaves",
    to: "FractalOctaves",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "OffsetH",
    to: "DragHorizontalOffset",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "OffsetV",
    to: "DragVerticalOffset",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "OffDisabled",
    to: "UncheckedDisabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "OnDisabled",
    to: "CheckedDisabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Oneshot",
    to: "OneShot",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "OutOfRangeMode",
    to: "MaxPolyphony",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "PauseMode",
    to: "ProcessMode",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Perpendicular",
    to: "Orthogonal",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "PhysicalScancode",
    to: "PhysicalKeycode",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "PopupExclusive",
    to: "Exclusive",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "ProximityFadeEnable",
    to: "ProximityFadeEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectPosition",
    to: "Position",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectGlobalPosition",
    to: "GlobalPosition",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectSize",
    to: "Size",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectMinSize",
    to: "CustomMinimumSize",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectRotation",
    to: "Rotation",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectScale",
    to: "Scale",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectPivotOffset",
    to: "PivotOffset",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RectClipContent",
    to: "ClipContents",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RefuseNewNetworkConnections",
    to: "RefuseNewConnections",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "RegionFilterClip",
    to: "RegionFilterClipEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "ReverbBusEnable",
    to: "ReverbBusEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Scancode",
    to: "Keycode",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Selectedframe",
    to: "SelectedFrame",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SizeOverrideStretch",
    to: "Size2dOverrideStretch",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SlipsOnSlope",
    to: "SlideOnSlope",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SmoothingEnabled",
    to: "PositionSmoothingEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SmoothingSpeed",
    to: "PositionSmoothingSpeed",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SsReflectionsDepthTolerance",
    to: "SsrDepthTolerance",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SsReflectionsEnabled",
    to: "SsrEnabled",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SsReflectionsFadeIn",
    to: "SsrFadeIn",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SsReflectionsFadeOut",
    to: "SsrFadeOut",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SsReflectionsMaxSteps",
    to: "SsrMaxSteps",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "StateMachineSelectedframe",
    to: "StateMachineSelectedFrame",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "SyntaxHighlighting",
    to: "SyntaxHighlighter",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "TabAlign",
    to: "TabAlignment",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "TableHseparation",
    to: "TableHSeparation",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "TableVseparation",
    to: "TableVSeparation",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Tangent",
    to: "Orthogonal",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "TargetLocation",
    to: "TargetPosition",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Toplevel",
    to: "TopLevel",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Translation",
    to: "Position",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "UnitDb",
    to: "VolumeDb",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "UnitOffset",
    to: "ProgressRatio",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "Vseparation",
    to: "VSeparation",
    type: RenameType.CS_PROPERTIES,
  },
  {
    from: "about_to_show",
    to: "about_to_popup",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "button_release",
    to: "button_released",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "cancelled",
    to: "canceled",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "item_double_clicked",
    to: "item_icon_double_clicked",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "network_peer_connected",
    to: "peer_connected",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "network_peer_disconnected",
    to: "peer_disconnected",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "network_peer_packet",
    to: "peer_packet",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "node_unselected",
    to: "node_deselected",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "offset_changed",
    to: "position_offset_changed",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "settings_changed",
    to: "changed",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "skeleton_updated",
    to: "pose_updated",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "tab_close",
    to: "tab_closed",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "tab_hover",
    to: "tab_hovered",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "text_entered",
    to: "text_submitted",
    type: RenameType.GD_SIGNALS,
  },
  {
    from: "AboutToShow",
    to: "AboutToPopup",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "ButtonRelease",
    to: "ButtonReleased",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "Cancelled",
    to: "Canceled",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "ItemDoubleClicked",
    to: "ItemIconDoubleClicked",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "NetworkPeerConnected",
    to: "PeerConnected",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "NetworkPeerDisconnected",
    to: "PeerDisconnected",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "NetworkPeerPacket",
    to: "PeerPacket",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "NodeUnselected",
    to: "NodeDeselected",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "OffsetChanged",
    to: "PositionOffsetChanged",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "SettingsChanged",
    to: "Changed",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "SkeletonUpdated",
    to: "PoseUpdated",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "TabClose",
    to: "TabClosed",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "TabHover",
    to: "TabHovered",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "TextEntered",
    to: "TextSubmitted",
    type: RenameType.CS_SIGNALS,
  },
  {
    from: "audio/channel_disable_threshold_db",
    to: "audio/buses/channel_disable_threshold_db",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/channel_disable_time",
    to: "audio/buses/channel_disable_time",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/default_bus_layout",
    to: "audio/buses/default_bus_layout",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/driver",
    to: "audio/driver/driver",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/enable_audio_input",
    to: "audio/driver/enable_input",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/mix_rate",
    to: "audio/driver/mix_rate",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/output_latency",
    to: "audio/driver/output_latency",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/output_latency.web",
    to: "audio/driver/output_latency.web",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "audio/video_delay_compensation_ms",
    to: "audio/video/video_delay_compensation_ms",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "display/window/size/width",
    to: "display/window/size/viewport_width",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "display/window/size/height",
    to: "display/window/size/viewport_height",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "display/window/size/test_width",
    to: "display/window/size/window_width_override",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "display/window/size/test_height",
    to: "display/window/size/window_height_override",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "display/window/vsync/use_vsync",
    to: "display/window/vsync/vsync_mode",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "editor/main_run_args",
    to: "editor/run/main_run_args",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "gui/common/swap_ok_cancel",
    to: "gui/common/swap_cancel_ok",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "network/limits/debugger_stdout/max_chars_per_second",
    to: "network/limits/debugger/max_chars_per_second",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "network/limits/debugger_stdout/max_errors_per_second",
    to: "network/limits/debugger/max_errors_per_second",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "network/limits/debugger_stdout/max_messages_per_frame",
    to: "network/limits/debugger/max_queued_messages",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "network/limits/debugger_stdout/max_warnings_per_second",
    to: "network/limits/debugger/max_warnings_per_second",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "network/ssl/certificates",
    to: "network/tls/certificate_bundle_override",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "physics/2d/thread_model",
    to: "physics/2d/run_on_thread",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/environment/default_clear_color",
    to: "rendering/environment/defaults/default_clear_color",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/environment/default_environment",
    to: "rendering/environment/defaults/default_environment",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/depth_prepass/disable_for_vendors",
    to: "rendering/driver/depth_prepass/disable_for_vendors",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/depth_prepass/enable",
    to: "rendering/driver/depth_prepass/enable",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shading/force_blinn_over_ggx",
    to: "rendering/shading/overrides/force_blinn_over_ggx",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shading/force_blinn_over_ggx.mobile",
    to: "rendering/shading/overrides/force_blinn_over_ggx.mobile",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shading/force_lambert_over_burley",
    to: "rendering/shading/overrides/force_lambert_over_burley",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shading/force_lambert_over_burley.mobile",
    to: "rendering/shading/overrides/force_lambert_over_burley.mobile",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shading/force_vertex_shading",
    to: "rendering/shading/overrides/force_vertex_shading",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shading/force_vertex_shading.mobile",
    to: "rendering/shading/overrides/force_vertex_shading.mobile",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shadow_atlas/quadrant_0_subdiv",
    to: "rendering/lights_and_shadows/shadow_atlas/quadrant_0_subdiv",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shadow_atlas/quadrant_1_subdiv",
    to: "rendering/lights_and_shadows/shadow_atlas/quadrant_1_subdiv",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shadow_atlas/quadrant_2_subdiv",
    to: "rendering/lights_and_shadows/shadow_atlas/quadrant_2_subdiv",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shadow_atlas/quadrant_3_subdiv",
    to: "rendering/lights_and_shadows/shadow_atlas/quadrant_3_subdiv",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shadow_atlas/size",
    to: "rendering/lights_and_shadows/shadow_atlas/size",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/quality/shadow_atlas/size.mobile",
    to: "rendering/lights_and_shadows/shadow_atlas/size.mobile",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/vram_compression/import_etc2",
    to: "rendering/textures/vram_compression/import_etc2_astc",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "rendering/vram_compression/import_s3tc",
    to: "rendering/textures/vram_compression/import_s3tc_bptc",
    type: RenameType.PROJECT_SETTINGS,
  },
  {
    from: "channel_disable_threshold_db",
    to: "buses/channel_disable_threshold_db",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "channel_disable_time",
    to: "buses/channel_disable_time",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "default_bus_layout",
    to: "buses/default_bus_layout",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "enable_audio_input",
    to: "driver/enable_input",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "output_latency",
    to: "driver/output_latency",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "output_latency.web",
    to: "driver/output_latency.web",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "video_delay_compensation_ms",
    to: "video/video_delay_compensation_ms",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "window/size/width",
    to: "window/size/viewport_width",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "window/size/height",
    to: "window/size/viewport_height",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "window/size/test_width",
    to: "window/size/window_width_override",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "window/size/test_height",
    to: "window/size/window_height_override",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "window/vsync/use_vsync",
    to: "window/vsync/vsync_mode",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "main_run_args",
    to: "run/main_run_args",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "common/swap_ok_cancel",
    to: "common/swap_cancel_ok",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "limits/debugger_stdout/max_chars_per_second",
    to: "limits/debugger/max_chars_per_second",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "limits/debugger_stdout/max_errors_per_second",
    to: "limits/debugger/max_errors_per_second",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "limits/debugger_stdout/max_messages_per_frame",
    to: "limits/debugger/max_queued_messages",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "limits/debugger_stdout/max_warnings_per_second",
    to: "limits/debugger/max_warnings_per_second",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "ssl/certificates",
    to: "tls/certificate_bundle_override",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "2d/thread_model",
    to: "2d/run_on_thread",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "environment/default_clear_color",
    to: "environment/defaults/default_clear_color",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "environment/default_environment",
    to: "environment/defaults/default_environment",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/depth_prepass/disable_for_vendors",
    to: "driver/depth_prepass/disable_for_vendors",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/depth_prepass/enable",
    to: "driver/depth_prepass/enable",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shading/force_blinn_over_ggx",
    to: "shading/overrides/force_blinn_over_ggx",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shading/force_blinn_over_ggx.mobile",
    to: "shading/overrides/force_blinn_over_ggx.mobile",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shading/force_lambert_over_burley",
    to: "shading/overrides/force_lambert_over_burley",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shading/force_lambert_over_burley.mobile",
    to: "shading/overrides/force_lambert_over_burley.mobile",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shading/force_vertex_shading",
    to: "shading/overrides/force_vertex_shading",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shading/force_vertex_shading.mobile",
    to: "shading/overrides/force_vertex_shading.mobile",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shadow_atlas/quadrant_0_subdiv",
    to: "lights_and_shadows/shadow_atlas/quadrant_0_subdiv",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shadow_atlas/quadrant_1_subdiv",
    to: "lights_and_shadows/shadow_atlas/quadrant_1_subdiv",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shadow_atlas/quadrant_2_subdiv",
    to: "lights_and_shadows/shadow_atlas/quadrant_2_subdiv",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shadow_atlas/quadrant_3_subdiv",
    to: "lights_and_shadows/shadow_atlas/quadrant_3_subdiv",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shadow_atlas/size",
    to: "lights_and_shadows/shadow_atlas/size",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "quality/shadow_atlas/size.mobile",
    to: "lights_and_shadows/shadow_atlas/size.mobile",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "vram_compression/import_etc2",
    to: "textures/vram_compression/import_etc2_astc",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: "vram_compression/import_s3tc",
    to: "textures/vram_compression/import_s3tc_bptc",
    type: RenameType.PROJECT_GODOT,
  },
  {
    from: ",\"alt\":",
    to: ",\"alt_pressed\":",
    type: RenameType.INPUT_MAP,
  },
  {
    from: ",\"shift\":",
    to: ",\"shift_pressed\":",
    type: RenameType.INPUT_MAP,
  },
  {
    from: ",\"control\":",
    to: ",\"ctrl_pressed\":",
    type: RenameType.INPUT_MAP,
  },
  {
    from: ",\"meta\":",
    to: ",\"meta_pressed\":",
    type: RenameType.INPUT_MAP,
  },
  {
    from: ",\"scancode\":",
    to: ",\"keycode\":",
    type: RenameType.INPUT_MAP,
  },
  {
    from: ",\"physical_scancode\":",
    to: ",\"physical_keycode\":",
    type: RenameType.INPUT_MAP,
  },
  {
    from: ",\"doubleclick\":",
    to: ",\"double_click\":",
    type: RenameType.INPUT_MAP,
  },
  {
    from: "PoolByteArray",
    to: "PackedByteArray",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "PoolColorArray",
    to: "PackedColorArray",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "PoolIntArray",
    to: "PackedInt32Array",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "PoolRealArray",
    to: "PackedFloat32Array",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "PoolStringArray",
    to: "PackedStringArray",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "PoolVector2Array",
    to: "PackedVector2Array",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "PoolVector3Array",
    to: "PackedVector3Array",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "Quat",
    to: "Quaternion",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "Transform",
    to: "Transform3D",
    type: RenameType.BUILTIN_TYPES,
  },
  {
    from: "ALPHA_SCISSOR",
    to: "ALPHA_SCISSOR_THRESHOLD",
    type: RenameType.SHADERS,
  },
  {
    from: "CAMERA_MATRIX",
    to: "INV_VIEW_MATRIX",
    type: RenameType.SHADERS,
  },
  {
    from: "INV_CAMERA_MATRIX",
    to: "VIEW_MATRIX",
    type: RenameType.SHADERS,
  },
  {
    from: "NORMALMAP",
    to: "NORMAL_MAP",
    type: RenameType.SHADERS,
  },
  {
    from: "NORMALMAP_DEPTH",
    to: "NORMAL_MAP_DEPTH",
    type: RenameType.SHADERS,
  },
  {
    from: "TRANSMISSION",
    to: "BACKLIGHT",
    type: RenameType.SHADERS,
  },
  {
    from: "WORLD_MATRIX",
    to: "MODEL_MATRIX",
    type: RenameType.SHADERS,
  },
  {
    from: "depth_draw_alpha_prepass",
    to: "depth_draw_opaque",
    type: RenameType.SHADERS,
  },
  {
    from: "hint_albedo",
    to: "source_color",
    type: RenameType.SHADERS,
  },
  {
    from: "hint_aniso",
    to: "hint_anisotropy",
    type: RenameType.SHADERS,
  },
  {
    from: "hint_black",
    to: "hint_default_black",
    type: RenameType.SHADERS,
  },
  {
    from: "hint_black_albedo",
    to: "hint_default_black",
    type: RenameType.SHADERS,
  },
  {
    from: "hint_color",
    to: "source_color",
    type: RenameType.SHADERS,
  },
  {
    from: "hint_white",
    to: "hint_default_white",
    type: RenameType.SHADERS,
  },
  {
    from: "Area",
    to: "Area3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Camera",
    to: "Camera3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Path",
    to: "Path3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Reference",
    to: "RefCounted",
    type: RenameType.CLASSES,
  },
  {
    from: "Shape",
    to: "Shape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Tabs",
    to: "TabBar",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVRAnchor",
    to: "XRAnchor3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVRCamera",
    to: "XRCamera3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVRController",
    to: "XRController3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVRInterface",
    to: "XRInterface",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVRInterfaceGDNative",
    to: "Node3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVROrigin",
    to: "XROrigin3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVRPositionalTracker",
    to: "XRPositionalTracker",
    type: RenameType.CLASSES,
  },
  {
    from: "ARVRServer",
    to: "XRServer",
    type: RenameType.CLASSES,
  },
  {
    from: "AStar",
    to: "AStar3D",
    type: RenameType.CLASSES,
  },
  {
    from: "AnimatedSprite",
    to: "AnimatedSprite2D",
    type: RenameType.CLASSES,
  },
  {
    from: "AudioStreamOGGVorbis",
    to: "AudioStreamOggVorbis",
    type: RenameType.CLASSES,
  },
  {
    from: "AudioStreamRandomPitch",
    to: "AudioStreamRandomizer",
    type: RenameType.CLASSES,
  },
  {
    from: "AudioStreamSample",
    to: "AudioStreamWAV",
    type: RenameType.CLASSES,
  },
  {
    from: "BakedLightmap",
    to: "LightmapGI",
    type: RenameType.CLASSES,
  },
  {
    from: "BakedLightmapData",
    to: "LightmapGIData",
    type: RenameType.CLASSES,
  },
  {
    from: "BitmapFont",
    to: "FontFile",
    type: RenameType.CLASSES,
  },
  {
    from: "BoneAttachment",
    to: "BoneAttachment3D",
    type: RenameType.CLASSES,
  },
  {
    from: "BoxShape",
    to: "BoxShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CPUParticles",
    to: "CPUParticles3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGBox",
    to: "CSGBox3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGCombiner",
    to: "CSGCombiner3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGCylinder",
    to: "CSGCylinder3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGMesh",
    to: "CSGMesh3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGPolygon",
    to: "CSGPolygon3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGPrimitive",
    to: "CSGPrimitive3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGShape",
    to: "CSGShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGSphere",
    to: "CSGSphere3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CSGTorus",
    to: "CSGTorus3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CapsuleShape",
    to: "CapsuleShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ClippedCamera",
    to: "Camera3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CollisionObject",
    to: "CollisionObject3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CollisionPolygon",
    to: "CollisionPolygon3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CollisionShape",
    to: "CollisionShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ConcavePolygonShape",
    to: "ConcavePolygonShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ConeTwistJoint",
    to: "ConeTwistJoint3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ConvexPolygonShape",
    to: "ConvexPolygonShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "CubeMap",
    to: "Cubemap",
    type: RenameType.CLASSES,
  },
  {
    from: "CubeMesh",
    to: "BoxMesh",
    type: RenameType.CLASSES,
  },
  {
    from: "CylinderShape",
    to: "CylinderShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "DirectionalLight",
    to: "DirectionalLight3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Directory",
    to: "DirAccess",
    type: RenameType.CLASSES,
  },
  {
    from: "DynamicFont",
    to: "FontFile",
    type: RenameType.CLASSES,
  },
  {
    from: "DynamicFontData",
    to: "FontFile",
    type: RenameType.CLASSES,
  },
  {
    from: "EditorNavigationMeshGenerator",
    to: "NavigationMeshGenerator",
    type: RenameType.CLASSES,
  },
  {
    from: "EditorSceneImporter",
    to: "EditorSceneFormatImporter",
    type: RenameType.CLASSES,
  },
  {
    from: "EditorSceneImporterFBX",
    to: "EditorSceneFormatImporterFBX",
    type: RenameType.CLASSES,
  },
  {
    from: "EditorSceneImporterGLTF",
    to: "EditorSceneFormatImporterGLTF",
    type: RenameType.CLASSES,
  },
  {
    from: "EditorSpatialGizmo",
    to: "EditorNode3DGizmo",
    type: RenameType.CLASSES,
  },
  {
    from: "EditorSpatialGizmoPlugin",
    to: "EditorNode3DGizmoPlugin",
    type: RenameType.CLASSES,
  },
  {
    from: "ExternalTexture",
    to: "ImageTexture",
    type: RenameType.CLASSES,
  },
  {
    from: "GIProbe",
    to: "VoxelGI",
    type: RenameType.CLASSES,
  },
  {
    from: "GIProbeData",
    to: "VoxelGIData",
    type: RenameType.CLASSES,
  },
  {
    from: "Generic6DOFJoint",
    to: "Generic6DOFJoint3D",
    type: RenameType.CLASSES,
  },
  {
    from: "GeometryInstance",
    to: "GeometryInstance3D",
    type: RenameType.CLASSES,
  },
  {
    from: "GradientTexture",
    to: "GradientTexture2D",
    type: RenameType.CLASSES,
  },
  {
    from: "HeightMapShape",
    to: "HeightMapShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "HingeJoint",
    to: "HingeJoint3D",
    type: RenameType.CLASSES,
  },
  {
    from: "IP_Unix",
    to: "IPUnix",
    type: RenameType.CLASSES,
  },
  {
    from: "ImmediateGeometry",
    to: "ImmediateMesh",
    type: RenameType.CLASSES,
  },
  {
    from: "ImmediateGeometry3D",
    to: "ImmediateMesh",
    type: RenameType.CLASSES,
  },
  {
    from: "InterpolatedCamera",
    to: "Camera3D",
    type: RenameType.CLASSES,
  },
  {
    from: "InterpolatedCamera3D",
    to: "Camera3D",
    type: RenameType.CLASSES,
  },
  {
    from: "JSONParseResult",
    to: "JSON",
    type: RenameType.CLASSES,
  },
  {
    from: "Joint",
    to: "Joint3D",
    type: RenameType.CLASSES,
  },
  {
    from: "KinematicBody",
    to: "CharacterBody3D",
    type: RenameType.CLASSES,
  },
  {
    from: "KinematicBody2D",
    to: "CharacterBody2D",
    type: RenameType.CLASSES,
  },
  {
    from: "KinematicCollision",
    to: "KinematicCollision3D",
    type: RenameType.CLASSES,
  },
  {
    from: "LargeTexture",
    to: "ImageTexture",
    type: RenameType.CLASSES,
  },
  {
    from: "Light",
    to: "Light3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Light2D",
    to: "PointLight2D",
    type: RenameType.CLASSES,
  },
  {
    from: "LineShape2D",
    to: "WorldBoundaryShape2D",
    type: RenameType.CLASSES,
  },
  {
    from: "Listener",
    to: "AudioListener3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Listener2D",
    to: "AudioListener2D",
    type: RenameType.CLASSES,
  },
  {
    from: "MeshInstance",
    to: "MeshInstance3D",
    type: RenameType.CLASSES,
  },
  {
    from: "MultiMeshInstance",
    to: "MultiMeshInstance3D",
    type: RenameType.CLASSES,
  },
  {
    from: "MultiplayerPeerGDNative",
    to: "MultiplayerPeerExtension",
    type: RenameType.CLASSES,
  },
  {
    from: "Navigation2DServer",
    to: "NavigationServer2D",
    type: RenameType.CLASSES,
  },
  {
    from: "NavigationAgent",
    to: "NavigationAgent3D",
    type: RenameType.CLASSES,
  },
  {
    from: "NavigationMeshInstance",
    to: "NavigationRegion3D",
    type: RenameType.CLASSES,
  },
  {
    from: "NavigationObstacle",
    to: "NavigationObstacle3D",
    type: RenameType.CLASSES,
  },
  {
    from: "NavigationPolygonInstance",
    to: "NavigationRegion2D",
    type: RenameType.CLASSES,
  },
  {
    from: "NavigationRegion",
    to: "NavigationRegion3D",
    type: RenameType.CLASSES,
  },
  {
    from: "NavigationServer",
    to: "NavigationServer3D",
    type: RenameType.CLASSES,
  },
  {
    from: "NetworkedMultiplayerCustom",
    to: "MultiplayerPeerExtension",
    type: RenameType.CLASSES,
  },
  {
    from: "NetworkedMultiplayerENet",
    to: "ENetMultiplayerPeer",
    type: RenameType.CLASSES,
  },
  {
    from: "NetworkedMultiplayerPeer",
    to: "MultiplayerPeer",
    type: RenameType.CLASSES,
  },
  {
    from: "Occluder",
    to: "OccluderInstance3D",
    type: RenameType.CLASSES,
  },
  {
    from: "OmniLight",
    to: "OmniLight3D",
    type: RenameType.CLASSES,
  },
  {
    from: "OpenSimplexNoise",
    to: "FastNoiseLite",
    type: RenameType.CLASSES,
  },
  {
    from: "PHashTranslation",
    to: "OptimizedTranslation",
    type: RenameType.CLASSES,
  },
  {
    from: "PacketPeerGDNative",
    to: "PacketPeerExtension",
    type: RenameType.CLASSES,
  },
  {
    from: "PanoramaSky",
    to: "Sky",
    type: RenameType.CLASSES,
  },
  {
    from: "Particles2D",
    to: "GPUParticles2D",
    type: RenameType.CLASSES,
  },
  {
    from: "ParticlesMaterial",
    to: "ParticleProcessMaterial",
    type: RenameType.CLASSES,
  },
  {
    from: "PathFollow",
    to: "PathFollow3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PhysicalBone",
    to: "PhysicalBone3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Physics2DDirectBodyState",
    to: "PhysicsDirectBodyState2D",
    type: RenameType.CLASSES,
  },
  {
    from: "Physics2DDirectSpaceState",
    to: "PhysicsDirectSpaceState2D",
    type: RenameType.CLASSES,
  },
  {
    from: "Physics2DServer",
    to: "PhysicsServer2D",
    type: RenameType.CLASSES,
  },
  {
    from: "Physics2DServerSW",
    to: "GodotPhysicsServer2D",
    type: RenameType.CLASSES,
  },
  {
    from: "Physics2DShapeQueryParameters",
    to: "PhysicsShapeQueryParameters2D",
    type: RenameType.CLASSES,
  },
  {
    from: "Physics2DTestMotionResult",
    to: "PhysicsTestMotionResult2D",
    type: RenameType.CLASSES,
  },
  {
    from: "PhysicsBody",
    to: "PhysicsBody3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PhysicsDirectBodyState",
    to: "PhysicsDirectBodyState3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PhysicsDirectSpaceState",
    to: "PhysicsDirectSpaceState3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PhysicsServer",
    to: "PhysicsServer3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PhysicsShapeQueryParameters",
    to: "PhysicsShapeQueryParameters3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PhysicsTestMotionResult",
    to: "PhysicsTestMotionResult3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PinJoint",
    to: "PinJoint3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PlaneShape",
    to: "WorldBoundaryShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "PopupDialog",
    to: "Popup",
    type: RenameType.CLASSES,
  },
  {
    from: "Position2D",
    to: "Marker2D",
    type: RenameType.CLASSES,
  },
  {
    from: "Position3D",
    to: "Marker3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ProceduralSky",
    to: "Sky",
    type: RenameType.CLASSES,
  },
  {
    from: "RayCast",
    to: "RayCast3D",
    type: RenameType.CLASSES,
  },
  {
    from: "RayShape",
    to: "SeparationRayShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "RayShape2D",
    to: "SeparationRayShape2D",
    type: RenameType.CLASSES,
  },
  {
    from: "RemoteTransform",
    to: "RemoteTransform3D",
    type: RenameType.CLASSES,
  },
  {
    from: "ResourceInteractiveLoader",
    to: "ResourceLoader",
    type: RenameType.CLASSES,
  },
  {
    from: "RigidBody",
    to: "RigidBody3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SceneTreeTween",
    to: "Tween",
    type: RenameType.CLASSES,
  },
  {
    from: "ShortCut",
    to: "Shortcut",
    type: RenameType.CLASSES,
  },
  {
    from: "Skeleton",
    to: "Skeleton3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SkeletonIK",
    to: "SkeletonIK3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SliderJoint",
    to: "SliderJoint3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SoftBody",
    to: "SoftBody3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Spatial",
    to: "Node3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SpatialGizmo",
    to: "Node3DGizmo",
    type: RenameType.CLASSES,
  },
  {
    from: "SpatialMaterial",
    to: "StandardMaterial3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SphereShape",
    to: "SphereShape3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SpotLight",
    to: "SpotLight3D",
    type: RenameType.CLASSES,
  },
  {
    from: "SpringArm",
    to: "SpringArm3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Sprite",
    to: "Sprite2D",
    type: RenameType.CLASSES,
  },
  {
    from: "StaticBody",
    to: "StaticBody3D",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamCubemap",
    to: "CompressedCubemap",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamCubemapArray",
    to: "CompressedCubemapArray",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamPeerGDNative",
    to: "StreamPeerExtension",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamPeerSSL",
    to: "StreamPeerTLS",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamTexture",
    to: "CompressedTexture2D",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamTexture2D",
    to: "CompressedTexture2D",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamTexture2DArray",
    to: "CompressedTexture2DArray",
    type: RenameType.CLASSES,
  },
  {
    from: "StreamTextureLayered",
    to: "CompressedTextureLayered",
    type: RenameType.CLASSES,
  },
  {
    from: "TCP_Server",
    to: "TCPServer",
    type: RenameType.CLASSES,
  },
  {
    from: "TextFile",
    to: "Node3D",
    type: RenameType.CLASSES,
  },
  {
    from: "Texture",
    to: "Texture2D",
    type: RenameType.CLASSES,
  },
  {
    from: "TextureArray",
    to: "Texture2DArray",
    type: RenameType.CLASSES,
  },
  {
    from: "TextureProgress",
    to: "TextureProgressBar",
    type: RenameType.CLASSES,
  },
  {
    from: "ToolButton",
    to: "Button",
    type: RenameType.CLASSES,
  },
  {
    from: "VehicleBody",
    to: "VehicleBody3D",
    type: RenameType.CLASSES,
  },
  {
    from: "VehicleWheel",
    to: "VehicleWheel3D",
    type: RenameType.CLASSES,
  },
  {
    from: "VideoPlayer",
    to: "VideoStreamPlayer",
    type: RenameType.CLASSES,
  },
  {
    from: "Viewport",
    to: "SubViewport",
    type: RenameType.CLASSES,
  },
  {
    from: "ViewportContainer",
    to: "SubViewportContainer",
    type: RenameType.CLASSES,
  },
  {
    from: "VisibilityEnabler",
    to: "VisibleOnScreenEnabler3D",
    type: RenameType.CLASSES,
  },
  {
    from: "VisibilityEnabler2D",
    to: "VisibleOnScreenEnabler2D",
    type: RenameType.CLASSES,
  },
  {
    from: "VisibilityNotifier",
    to: "VisibleOnScreenNotifier3D",
    type: RenameType.CLASSES,
  },
  {
    from: "VisibilityNotifier2D",
    to: "VisibleOnScreenNotifier2D",
    type: RenameType.CLASSES,
  },
  {
    from: "VisibilityNotifier3D",
    to: "VisibleOnScreenNotifier3D",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualInstance",
    to: "VisualInstance3D",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualServer",
    to: "RenderingServer",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeCubeMap",
    to: "VisualShaderNodeCubemap",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarClamp",
    to: "VisualShaderNodeClamp",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarConstant",
    to: "VisualShaderNodeFloatConstant",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarFunc",
    to: "VisualShaderNodeFloatFunc",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarInterp",
    to: "VisualShaderNodeMix",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarOp",
    to: "VisualShaderNodeFloatOp",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarSmoothStep",
    to: "VisualShaderNodeSmoothStep",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarSwitch",
    to: "VisualShaderNodeSwitch",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarTransformMult",
    to: "VisualShaderNodeTransformOp",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeTransformMult",
    to: "VisualShaderNode",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeVectorClamp",
    to: "VisualShaderNodeClamp",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeVectorInterp",
    to: "VisualShaderNodeMix",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeVectorScalarMix",
    to: "VisualShaderNodeMix",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeVectorScalarSmoothStep",
    to: "VisualShaderNodeSmoothStep",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeVectorScalarStep",
    to: "VisualShaderNodeStep",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeVectorSmoothStep",
    to: "VisualShaderNodeSmoothStep",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeBooleanUniform",
    to: "VisualShaderNodeBooleanParameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeColorUniform",
    to: "VisualShaderNodeColorParameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeScalarUniform",
    to: "VisualShaderNodeFloatParameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeCubemapUniform",
    to: "VisualShaderNodeCubemapParameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeTextureUniform",
    to: "VisualShaderNodeTexture2DParameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeTextureUniformTriplanar",
    to: "VisualShaderNodeTextureParameterTriplanar",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeTransformUniform",
    to: "VisualShaderNodeTransformParameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeVec3Uniform",
    to: "VisualShaderNodeVec3Parameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeUniform",
    to: "VisualShaderNodeParameter",
    type: RenameType.CLASSES,
  },
  {
    from: "VisualShaderNodeUniformRef",
    to: "VisualShaderNodeParameterRef",
    type: RenameType.CLASSES,
  },
  {
    from: "WebRTCDataChannelGDNative",
    to: "WebRTCDataChannelExtension",
    type: RenameType.CLASSES,
  },
  {
    from: "WebRTCMultiplayer",
    to: "WebRTCMultiplayerPeer",
    type: RenameType.CLASSES,
  },
  {
    from: "WebRTCPeerConnectionGDNative",
    to: "WebRTCPeerConnectionExtension",
    type: RenameType.CLASSES,
  },
  {
    from: "WindowDialog",
    to: "Window",
    type: RenameType.CLASSES,
  },
  {
    from: "XRAnchor",
    to: "XRAnchor3D",
    type: RenameType.CLASSES,
  },
  {
    from: "XRController",
    to: "XRController3D",
    type: RenameType.CLASSES,
  },
  {
    from: "XROrigin",
    to: "XROrigin3D",
    type: RenameType.CLASSES,
  },
  {
    from: "YSort",
    to: "Node2D",
    type: RenameType.CLASSES,
  },
  {
    from: "aliceblue",
    to: "ALICE_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "antiquewhite",
    to: "ANTIQUE_WHITE",
    type: RenameType.COLORS,
  },
  {
    from: "aqua",
    to: "AQUA",
    type: RenameType.COLORS,
  },
  {
    from: "aquamarine",
    to: "AQUAMARINE",
    type: RenameType.COLORS,
  },
  {
    from: "azure",
    to: "AZURE",
    type: RenameType.COLORS,
  },
  {
    from: "beige",
    to: "BEIGE",
    type: RenameType.COLORS,
  },
  {
    from: "bisque",
    to: "BISQUE",
    type: RenameType.COLORS,
  },
  {
    from: "black",
    to: "BLACK",
    type: RenameType.COLORS,
  },
  {
    from: "blanchedalmond",
    to: "BLANCHED_ALMOND",
    type: RenameType.COLORS,
  },
  {
    from: "blue",
    to: "BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "blueviolet",
    to: "BLUE_VIOLET",
    type: RenameType.COLORS,
  },
  {
    from: "brown",
    to: "BROWN",
    type: RenameType.COLORS,
  },
  {
    from: "burlywood",
    to: "BURLYWOOD",
    type: RenameType.COLORS,
  },
  {
    from: "cadetblue",
    to: "CADET_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "chartreuse",
    to: "CHARTREUSE",
    type: RenameType.COLORS,
  },
  {
    from: "chocolate",
    to: "CHOCOLATE",
    type: RenameType.COLORS,
  },
  {
    from: "coral",
    to: "CORAL",
    type: RenameType.COLORS,
  },
  {
    from: "cornflowerblue",
    to: "CORNFLOWER_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "cornsilk",
    to: "CORNSILK",
    type: RenameType.COLORS,
  },
  {
    from: "crimson",
    to: "CRIMSON",
    type: RenameType.COLORS,
  },
  {
    from: "cyan",
    to: "CYAN",
    type: RenameType.COLORS,
  },
  {
    from: "darkblue",
    to: "DARK_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "darkcyan",
    to: "DARK_CYAN",
    type: RenameType.COLORS,
  },
  {
    from: "darkgoldenrod",
    to: "DARK_GOLDENROD",
    type: RenameType.COLORS,
  },
  {
    from: "darkgray",
    to: "DARK_GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "darkgreen",
    to: "DARK_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "darkkhaki",
    to: "DARK_KHAKI",
    type: RenameType.COLORS,
  },
  {
    from: "darkmagenta",
    to: "DARK_MAGENTA",
    type: RenameType.COLORS,
  },
  {
    from: "darkolivegreen",
    to: "DARK_OLIVE_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "darkorange",
    to: "DARK_ORANGE",
    type: RenameType.COLORS,
  },
  {
    from: "darkorchid",
    to: "DARK_ORCHID",
    type: RenameType.COLORS,
  },
  {
    from: "darkred",
    to: "DARK_RED",
    type: RenameType.COLORS,
  },
  {
    from: "darksalmon",
    to: "DARK_SALMON",
    type: RenameType.COLORS,
  },
  {
    from: "darkseagreen",
    to: "DARK_SEA_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "darkslateblue",
    to: "DARK_SLATE_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "darkslategray",
    to: "DARK_SLATE_GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "darkturquoise",
    to: "DARK_TURQUOISE",
    type: RenameType.COLORS,
  },
  {
    from: "darkviolet",
    to: "DARK_VIOLET",
    type: RenameType.COLORS,
  },
  {
    from: "deeppink",
    to: "DEEP_PINK",
    type: RenameType.COLORS,
  },
  {
    from: "deepskyblue",
    to: "DEEP_SKY_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "dimgray",
    to: "DIM_GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "dodgerblue",
    to: "DODGER_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "firebrick",
    to: "FIREBRICK",
    type: RenameType.COLORS,
  },
  {
    from: "floralwhite",
    to: "FLORAL_WHITE",
    type: RenameType.COLORS,
  },
  {
    from: "forestgreen",
    to: "FOREST_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "fuchsia",
    to: "FUCHSIA",
    type: RenameType.COLORS,
  },
  {
    from: "gainsboro",
    to: "GAINSBORO",
    type: RenameType.COLORS,
  },
  {
    from: "ghostwhite",
    to: "GHOST_WHITE",
    type: RenameType.COLORS,
  },
  {
    from: "gold",
    to: "GOLD",
    type: RenameType.COLORS,
  },
  {
    from: "goldenrod",
    to: "GOLDENROD",
    type: RenameType.COLORS,
  },
  {
    from: "gray",
    to: "GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "green",
    to: "GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "greenyellow",
    to: "GREEN_YELLOW",
    type: RenameType.COLORS,
  },
  {
    from: "honeydew",
    to: "HONEYDEW",
    type: RenameType.COLORS,
  },
  {
    from: "hotpink",
    to: "HOT_PINK",
    type: RenameType.COLORS,
  },
  {
    from: "indianred",
    to: "INDIAN_RED",
    type: RenameType.COLORS,
  },
  {
    from: "indigo",
    to: "INDIGO",
    type: RenameType.COLORS,
  },
  {
    from: "ivory",
    to: "IVORY",
    type: RenameType.COLORS,
  },
  {
    from: "khaki",
    to: "KHAKI",
    type: RenameType.COLORS,
  },
  {
    from: "lavender",
    to: "LAVENDER",
    type: RenameType.COLORS,
  },
  {
    from: "lavenderblush",
    to: "LAVENDER_BLUSH",
    type: RenameType.COLORS,
  },
  {
    from: "lawngreen",
    to: "LAWN_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "lemonchiffon",
    to: "LEMON_CHIFFON",
    type: RenameType.COLORS,
  },
  {
    from: "lightblue",
    to: "LIGHT_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "lightcoral",
    to: "LIGHT_CORAL",
    type: RenameType.COLORS,
  },
  {
    from: "lightcyan",
    to: "LIGHT_CYAN",
    type: RenameType.COLORS,
  },
  {
    from: "lightgoldenrod",
    to: "LIGHT_GOLDENROD",
    type: RenameType.COLORS,
  },
  {
    from: "lightgray",
    to: "LIGHT_GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "lightgreen",
    to: "LIGHT_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "lightpink",
    to: "LIGHT_PINK",
    type: RenameType.COLORS,
  },
  {
    from: "lightsalmon",
    to: "LIGHT_SALMON",
    type: RenameType.COLORS,
  },
  {
    from: "lightseagreen",
    to: "LIGHT_SEA_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "lightskyblue",
    to: "LIGHT_SKY_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "lightslategray",
    to: "LIGHT_SLATE_GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "lightsteelblue",
    to: "LIGHT_STEEL_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "lightyellow",
    to: "LIGHT_YELLOW",
    type: RenameType.COLORS,
  },
  {
    from: "lime",
    to: "LIME",
    type: RenameType.COLORS,
  },
  {
    from: "limegreen",
    to: "LIME_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "linen",
    to: "LINEN",
    type: RenameType.COLORS,
  },
  {
    from: "magenta",
    to: "MAGENTA",
    type: RenameType.COLORS,
  },
  {
    from: "maroon",
    to: "MAROON",
    type: RenameType.COLORS,
  },
  {
    from: "mediumaquamarine",
    to: "MEDIUM_AQUAMARINE",
    type: RenameType.COLORS,
  },
  {
    from: "mediumblue",
    to: "MEDIUM_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "mediumorchid",
    to: "MEDIUM_ORCHID",
    type: RenameType.COLORS,
  },
  {
    from: "mediumpurple",
    to: "MEDIUM_PURPLE",
    type: RenameType.COLORS,
  },
  {
    from: "mediumseagreen",
    to: "MEDIUM_SEA_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "mediumslateblue",
    to: "MEDIUM_SLATE_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "mediumspringgreen",
    to: "MEDIUM_SPRING_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "mediumturquoise",
    to: "MEDIUM_TURQUOISE",
    type: RenameType.COLORS,
  },
  {
    from: "mediumvioletred",
    to: "MEDIUM_VIOLET_RED",
    type: RenameType.COLORS,
  },
  {
    from: "midnightblue",
    to: "MIDNIGHT_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "mintcream",
    to: "MINT_CREAM",
    type: RenameType.COLORS,
  },
  {
    from: "mistyrose",
    to: "MISTY_ROSE",
    type: RenameType.COLORS,
  },
  {
    from: "moccasin",
    to: "MOCCASIN",
    type: RenameType.COLORS,
  },
  {
    from: "navajowhite",
    to: "NAVAJO_WHITE",
    type: RenameType.COLORS,
  },
  {
    from: "navyblue",
    to: "NAVY_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "oldlace",
    to: "OLD_LACE",
    type: RenameType.COLORS,
  },
  {
    from: "olive",
    to: "OLIVE",
    type: RenameType.COLORS,
  },
  {
    from: "olivedrab",
    to: "OLIVE_DRAB",
    type: RenameType.COLORS,
  },
  {
    from: "orange",
    to: "ORANGE",
    type: RenameType.COLORS,
  },
  {
    from: "orangered",
    to: "ORANGE_RED",
    type: RenameType.COLORS,
  },
  {
    from: "orchid",
    to: "ORCHID",
    type: RenameType.COLORS,
  },
  {
    from: "palegoldenrod",
    to: "PALE_GOLDENROD",
    type: RenameType.COLORS,
  },
  {
    from: "palegreen",
    to: "PALE_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "paleturquoise",
    to: "PALE_TURQUOISE",
    type: RenameType.COLORS,
  },
  {
    from: "palevioletred",
    to: "PALE_VIOLET_RED",
    type: RenameType.COLORS,
  },
  {
    from: "papayawhip",
    to: "PAPAYA_WHIP",
    type: RenameType.COLORS,
  },
  {
    from: "peachpuff",
    to: "PEACH_PUFF",
    type: RenameType.COLORS,
  },
  {
    from: "peru",
    to: "PERU",
    type: RenameType.COLORS,
  },
  {
    from: "pink",
    to: "PINK",
    type: RenameType.COLORS,
  },
  {
    from: "plum",
    to: "PLUM",
    type: RenameType.COLORS,
  },
  {
    from: "powderblue",
    to: "POWDER_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "purple",
    to: "PURPLE",
    type: RenameType.COLORS,
  },
  {
    from: "rebeccapurple",
    to: "REBECCA_PURPLE",
    type: RenameType.COLORS,
  },
  {
    from: "red",
    to: "RED",
    type: RenameType.COLORS,
  },
  {
    from: "rosybrown",
    to: "ROSY_BROWN",
    type: RenameType.COLORS,
  },
  {
    from: "royalblue",
    to: "ROYAL_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "saddlebrown",
    to: "SADDLE_BROWN",
    type: RenameType.COLORS,
  },
  {
    from: "salmon",
    to: "SALMON",
    type: RenameType.COLORS,
  },
  {
    from: "sandybrown",
    to: "SANDY_BROWN",
    type: RenameType.COLORS,
  },
  {
    from: "seagreen",
    to: "SEA_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "seashell",
    to: "SEASHELL",
    type: RenameType.COLORS,
  },
  {
    from: "sienna",
    to: "SIENNA",
    type: RenameType.COLORS,
  },
  {
    from: "silver",
    to: "SILVER",
    type: RenameType.COLORS,
  },
  {
    from: "skyblue",
    to: "SKY_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "slateblue",
    to: "SLATE_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "slategray",
    to: "SLATE_GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "snow",
    to: "SNOW",
    type: RenameType.COLORS,
  },
  {
    from: "springgreen",
    to: "SPRING_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "steelblue",
    to: "STEEL_BLUE",
    type: RenameType.COLORS,
  },
  {
    from: "tan",
    to: "TAN",
    type: RenameType.COLORS,
  },
  {
    from: "teal",
    to: "TEAL",
    type: RenameType.COLORS,
  },
  {
    from: "thistle",
    to: "THISTLE",
    type: RenameType.COLORS,
  },
  {
    from: "tomato",
    to: "TOMATO",
    type: RenameType.COLORS,
  },
  {
    from: "transparent",
    to: "TRANSPARENT",
    type: RenameType.COLORS,
  },
  {
    from: "turquoise",
    to: "TURQUOISE",
    type: RenameType.COLORS,
  },
  {
    from: "violet",
    to: "VIOLET",
    type: RenameType.COLORS,
  },
  {
    from: "webgray",
    to: "WEB_GRAY",
    type: RenameType.COLORS,
  },
  {
    from: "webgreen",
    to: "WEB_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "webmaroon",
    to: "WEB_MAROON",
    type: RenameType.COLORS,
  },
  {
    from: "webpurple",
    to: "WEB_PURPLE",
    type: RenameType.COLORS,
  },
  {
    from: "wheat",
    to: "WHEAT",
    type: RenameType.COLORS,
  },
  {
    from: "white",
    to: "WHITE",
    type: RenameType.COLORS,
  },
  {
    from: "whitesmoke",
    to: "WHITE_SMOKE",
    type: RenameType.COLORS,
  },
  {
    from: "yellow",
    to: "YELLOW",
    type: RenameType.COLORS,
  },
  {
    from: "yellowgreen",
    to: "YELLOW_GREEN",
    type: RenameType.COLORS,
  },
  {
    from: "custom_colors/",
    to: "theme_override_colors/",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "custom_constants/",
    to: "theme_override_constants/",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "custom_fonts/",
    to: "theme_override_fonts/",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "custom_icons/",
    to: "theme_override_icons/",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "custom_styles/",
    to: "theme_override_styles/",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_constants/offset_right",
    to: "theme_override_constants/margin_right",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_constants/offset_top",
    to: "theme_override_constants/margin_top",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_constants/offset_left",
    to: "theme_override_constants/margin_left",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_constants/offset_bottom",
    to: "theme_override_constants/margin_bottom",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_styles/panel",
    to: "theme_override_styles/panel",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_styles/tab_bg",
    to: "theme_override_styles/tab_unselected",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_styles/tab_fg",
    to: "theme_override_styles/tab_selected",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_colors/font_color_hover",
    to: "theme_override_colors/font_hover_color",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_colors/font_color_pressed",
    to: "theme_override_colors/font_pressed_color",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_colors/font_color_disabled",
    to: "theme_override_colors/font_disabled_color",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_colors/font_color_focus",
    to: "theme_override_colors/font_focus_color",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_colors/font_color_hover_pressed",
    to: "theme_override_colors/font_hover_pressed_color",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_colors/font_outline_modulate",
    to: "theme_override_colors/font_outline_color",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_colors/font_color_shadow",
    to: "theme_override_colors/font_shadow_color",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_constants/shadow_as_outline",
    to: "theme_override_constants/shadow_outline_size",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_constants/table_vseparation",
    to: "theme_override_constants/table_v_separation",
    type: RenameType.THEME_OVERRIDES,
  },
  {
    from: "theme_override_constants/table_hseparation",
    to: "theme_override_constants/table_h_separation",
    type: RenameType.THEME_OVERRIDES,
  },
])
