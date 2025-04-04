// hola.cc
#include <node.h>

namespace demo {
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::NewStringType;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();
        args.GetReturnValue().Set(
            String::NewFromUtf8(isolate, "mundo", NewStringType::kNormal).ToLocalChecked()
        );
    }

    void Initialize(v8::Local<v8::Object> exports) {
        NODE_SET_METHOD(exports, "hola", Method);
    }

    NODE_MODULE(hola, Initialize)  // ← Asegúrate de que el nombre coincide con el binding.gyp
}  
