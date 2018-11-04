define({ "api": [
  {
    "type": "post",
    "url": "/api/category/add/",
    "title": "添加子分类",
    "name": "category_add______",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pId",
            "description": "<p>父级id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>分类所在层级.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category/add/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/category/all/",
    "title": "获取所有树形分类",
    "name": "category_all_________",
    "group": "Category",
    "sampleRequest": [
      {
        "url": "/api/category/all/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/api/category/delete/",
    "title": "删除分类",
    "name": "category_delete_____",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category/delete/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/category/sub/",
    "title": "获取子级分类",
    "name": "category_sub",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pId",
            "description": "<p>父级分类id。注：获取一级分类pId=1;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category/sub/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/api/category/update/",
    "title": "更新分类",
    "name": "category_update_____",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category/update/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/api/upload/common/",
    "title": "通用图片上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，不限制尺寸，存储至details文件夹</p>",
    "name": "upload_common_",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/slider/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/api/upload/goods/",
    "title": "上传商品主图",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，尺寸（300~1500），存储至goods文件夹</p>",
    "name": "upload_goods_",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/goods/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lgImg",
            "description": "<p>返回720宽度图片地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mdImg",
            "description": "<p>返回360宽度图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/api/upload/slider/",
    "title": "轮播图上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，尺寸（300~1500）必须是正方形，存储至goods文件夹</p>",
    "name": "upload_slider_",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/slider/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>返回720宽度图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/users/login/",
    "title": "登录",
    "name": "login___",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户账户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/users/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/register/",
    "title": "注册",
    "name": "register___",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户账户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/users/register"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });